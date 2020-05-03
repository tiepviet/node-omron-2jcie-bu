/**
 * node-omron-2jcie-bu/lib/utilities.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

require('./annotations');

/**
 * @private
 */
const Commands = require('./commands');

/**
 * @private
 */
const Addresses = require('./addresses');

/**
 * @private
 */
const Formats = require('./formats');

/**
 * @private
 */
const Units = require('./units');

/**
 * @public
 */
const Utilities = (() => {

    /**
     * @private
     */
    const privateScope = {};

    /**
     * @private
     * @type {Buffer}
     */
    privateScope.frameHeaderBuffer = Buffer.from([0x52, 0x42]);

    /**
     * @private
     * @type {DataType}
     */
    privateScope.errorResponseDataType = {
        length: 1,
        fields: [
            { begin: 0, end: 0, format: 'UInt8', unit: 'errorCode', name: 'code', originalName: 'code', },
        ],
    };

    /**
     * @private
     * @function
     * @param {AddressType} addressType
     * @param {CommandType} commandType
     * @return {DataType}
     */
    privateScope.selectCommandDataType = (addressType, commandType) => {
        switch (commandType.value) {
            case 0x01: {
                return addressType.readCommandDataType;
            }
            case 0x02: {
                return addressType.writeCommandDataType;
            }
        }
    };

    /**
     * @private
     * @function
     * @param {AddressType} addressType
     * @param {CommandType} commandType
     * @return {DataType}
     */
    privateScope.selectResponseDataType = (addressType, commandType) => {
        switch (commandType.value) {
            case 0x01: {
                return addressType.readResponseDataType;
            }
            case 0x02: {
                return addressType.writeResponseDataType;
            }
            case 0x81: {
                return privateScope.errorResponseDataType;
            }
            case 0x82: {
                return privateScope.errorResponseDataType;
            }
            case 0xFF: {
                return privateScope.errorResponseDataType;
            }
        }
    };

    /**
     * @private
     * @function
     * @param {Buffer} buffer 
     * @return {number}
     */
    privateScope.calculateCrc16Value = (buffer) => {
        let crc16Value = 0xFFFF;
        for (let i = 0; i < buffer.length; i += 1) {
            crc16Value = crc16Value ^ buffer[i];
            for (let j = 0; j < 8; j += 1) {
                const carry = crc16Value & 1;
                crc16Value = crc16Value >> 1;
                if (carry == 1) {
                    crc16Value = crc16Value ^ 0xA001;
                }
            }
        }
        crc16Value = crc16Value & 0xFFFF;
        return crc16Value;
    };

    /**
     * @private
     * @function
     * @param {Frame} frame
     * @return {Buffer}
     */
    privateScope.packFrame = (frame) => {
        const frameBuffer = Buffer.alloc(4 + frame.payloadBuffer.length + 2);
        privateScope.frameHeaderBuffer.copy(frameBuffer, 0, 0, 2);
        const lengthValue = frame.payloadBuffer.length + 2;
        frameBuffer.writeUInt16LE(lengthValue, 2);
        frame.payloadBuffer.copy(frameBuffer, 4, 0, frame.payloadBuffer.length);
        const crc16Value = privateScope.calculateCrc16Value(frameBuffer.slice(0, 4 + frame.payloadBuffer.length));
        frameBuffer.writeUInt16LE(crc16Value, 4 + frame.payloadBuffer.length);
        return frameBuffer;
    };

    /**
     * @private
     * @function
     * @param {Buffer} frameBuffer
     * @return {Frame}
     */
    privateScope.unpackFrame = (frameBuffer) => {
        const frame = {};
        frame.headerBuffer = frameBuffer.slice(0, 2);
        frame.lengthValue = frameBuffer.readUInt16LE(2);
        frame.payloadBuffer = frameBuffer.slice(4, 4 + frame.lengthValue - 2);
        frame.crc16Value = frameBuffer.readUInt16LE(4 + frame.lengthValue - 2);
        return frame;
    };

    /**
     * @private
     * @function
     * @param {Payload} payload
     * @return {Buffer}
     */
    privateScope.packPayload = (payload) => {
        const payloadBuffer = Buffer.alloc(3 + payload.dataBuffer.length);
        payloadBuffer.writeUInt8(payload.commandValue, 0);
        payloadBuffer.writeUInt16LE(payload.addressValue, 1);
        payload.dataBuffer.copy(payloadBuffer, 3, 0, payload.dataBuffer.length);
        return payloadBuffer;
    };

    /**
     * @private
     * @function
     * @param {Buffer} payloadBuffer 
     * @return {Payload}
     */
    privateScope.unpackPayload = (payloadBuffer) => {
        const payload = {};
        payload.commandValue = payloadBuffer.readUInt8(0);
        payload.addressValue = payloadBuffer.readUInt16LE(1);
        payload.dataBuffer = payloadBuffer.slice(3);
        return payload;
    };

    /**
     * @private
     * @function
     * @param {DataType} dataType
     * @param {Object<FieldName, any>} data
     * @return {Buffer}
     */
    privateScope.packData = (dataType, data) => {
        const dataBuffer = Buffer.alloc(dataType.length);
        for (const field of dataType.fields) {
            const formatType = Formats.find(field.format);
            const unitType = Units.find(field.unit);
            formatType.write(dataBuffer, field.begin, field.end, unitType.encode(data[field.name]));
        }
        return dataBuffer;
    };

    /**
     * @private
     * @function
     * @param {DataType} dataType
     * @param {Buffer} dataBuffer
     * @return {Object<FieldName, any>}
     */
    privateScope.unpackData = (dataType, dataBuffer) => {
        const data = {};
        for (const field of dataType.fields) {
            const formatType = Formats.find(field.format);
            const unitType = Units.find(field.unit);
            data[field.name] = unitType.decode(formatType.read(dataBuffer, field.begin, field.end));
        }
        return data;
    };

    /**
     * @public
     */
    const publicScope = {};

    /**
     * @private
     * @function
     */
    publicScope.privateScope = () => {
        return privateScope;
    };

    /**
     * @public
     * @function 
     * @param {CommandPayload} commandPayload
     * @return {Buffer}
     */
    publicScope.packCommandPayloadInFrameBuffer = (commandPayload) => {
        const commandType = Commands.find(commandPayload.command);
        const addressType = Addresses.find(commandPayload.address);
        const dataType = privateScope.selectCommandDataType(addressType, commandType);
        const dataBuffer = privateScope.packData(dataType, commandPayload.data);
        const payload = {
            commandValue: commandType.value,
            addressValue: addressType.value,
            dataBuffer
        };
        const payloadBuffer = privateScope.packPayload(payload);
        const frame = {
            payloadBuffer
        };
        const frameBuffer = privateScope.packFrame(frame);
        return frameBuffer;
    };

    /**
     * @public
     * @function
     * @param {Buffer} frameBuffer
     * @return {ResponsePayload}
     */
    publicScope.unpackResponsePayloadFromFrameBuffer = (frameBuffer) => {
        const frame = privateScope.unpackFrame(frameBuffer);
        const payload = privateScope.unpackPayload(frame.payloadBuffer);
        const commandType = Commands.find(payload.commandValue);
        const addressType = Addresses.find(payload.addressValue);
        const dataType = privateScope.selectResponseDataType(addressType, commandType);
        const data = privateScope.unpackData(dataType, payload.dataBuffer);
        const responsePayload = {
            command: commandType.name,
            address: addressType.name,
            data
        };
        return responsePayload;
    };

    /**
     * @public
     * @function
     * @param {Buffer} buffer
     * @return {{
     *   frameOffset: number;
     *   frameLength: number;
     *   frameBuffer: Buffer;
     * }[]}
     */
    publicScope.readAcceptableFramesFromBuffer = (buffer) => {
        const frames = [];
        let index = 0;
        while (index < buffer.length) {
            const frameOffset = buffer.indexOf(privateScope.frameHeaderBuffer, index);
            if (!(frameOffset >= 0)) {
                break;
            }
            index = frameOffset + privateScope.frameHeaderBuffer.length;
            if (!(frameOffset + 9 <= buffer.length)) {
                continue;
            }
            const lengthValue = buffer.readUInt16LE(frameOffset + 2);
            if (!(lengthValue >= 5)) {
                continue;
            }
            const commandValue = buffer.readUInt8(frameOffset + 4);
            if (!(commandValue === 0x01 || commandValue === 0x02 || commandValue === 0x81 || commandValue === 0x82 || commandValue === 0xff)) {
                continue;
            }
            const frameLength = 4 + lengthValue;
            if (!(frameOffset + frameLength <= buffer.length)) {
                continue;
            }
            const frameBuffer = buffer.slice(frameOffset, frameOffset + frameLength);
            const crc16ValueCheck = privateScope.calculateCrc16Value(frameBuffer);
            if (!(crc16ValueCheck === 0)) {
                continue;
            }
            frames.push({
                frameOffset,
                frameLength,
                frameBuffer
            });
        }
        return frames;
    };

    return publicScope;

})();

/**
 * @public
 */
module.exports = Utilities;
