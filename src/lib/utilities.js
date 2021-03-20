/**
 * node-omron-2jcie-bu/src/lib/utilities.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

const { Commands } = require('./commands');
const { Addresses } = require('./addresses');
const { Formats } = require('./formats');
const { Contents } = require('./contents');

const { Utilities } = (() => {

    /** @typedef UtilitiesConstructorOptions @type {import('../../types').UtilitiesConstructorOptions} */
    /** @typedef _Utilities @type {import('../../types')._Utilities} */
    /** @typedef Utilities @type {import('../../types').Utilities} */
    /** @typedef UtilitiesConstructor @type {import('../../types').UtilitiesConstructor} */
    /** @typedef Frame @type {import('../../types').Frame} */
    /** @typedef Payload @type {import('../../types').Payload} */
    /** @typedef ResponsePayload @type {import('../../types').ResponsePayload} */
    /** @typedef FieldName @type {import('../../types').FieldName} */
    /** @typedef AcceptableFrameRange @type {import('../../types').AcceptableFrameRange} */
    /** @typedef AcceptableFrameRangeArray @type {import('../../types').AcceptableFrameRangeArray} */
    /** @typedef MemoryDataLongReadCommandData @type {import('../../types').MemoryDataLongReadCommandData} */
    /** @typedef MemoryDataShortReadCommandData @type {import('../../types').MemoryDataShortReadCommandData} */

    /** @type {UtilitiesConstructor} */
    const Utilities = (options) => {

        /** @type {UtilitiesConstructorOptions} */
        const _options = options;

        /** @type {_Utilities} */
        const _it = {};
        _it.frameHeaderBuffer = Buffer.from([0x52, 0x42]);
        _it.errorResponseDataType = {
            length: 1,
            fieldTypes: [
                { begin: 0, end: 0, format: 'UInt8', content: 'errorCode', name: 'code', originalName: 'code' }
            ]
        };
        _it.calculateCrc16Value = (buffer) => {
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
        _it.packFrame = (frame) => {
            const frameBuffer = Buffer.alloc(4 + frame.payloadBuffer.length + 2);
            _it.frameHeaderBuffer.copy(frameBuffer, 0, 0, 2);
            const lengthValue = frame.payloadBuffer.length + 2;
            frameBuffer.writeUInt16LE(lengthValue, 2);
            frame.payloadBuffer.copy(frameBuffer, 4, 0, frame.payloadBuffer.length);
            const crc16Value = _it.calculateCrc16Value(frameBuffer.slice(0, 4 + frame.payloadBuffer.length));
            frameBuffer.writeUInt16LE(crc16Value, 4 + frame.payloadBuffer.length);
            return frameBuffer;
        };
        _it.unpackFrame = (frameBuffer) => {
            /** @type {Frame} */
            const frame = {};
            frame.headerBuffer = frameBuffer.slice(0, 2);
            frame.lengthValue = frameBuffer.readUInt16LE(2);
            frame.payloadBuffer = frameBuffer.slice(4, 4 + frame.lengthValue - 2);
            frame.crc16Value = frameBuffer.readUInt16LE(4 + frame.lengthValue - 2);
            return frame;
        };
        _it.packPayload = (payload) => {
            const payloadBuffer = Buffer.alloc(3 + payload.dataBuffer.length);
            payloadBuffer.writeUInt8(payload.commandValue, 0);
            payloadBuffer.writeUInt16LE(payload.addressValue, 1);
            payload.dataBuffer.copy(payloadBuffer, 3, 0, payload.dataBuffer.length);
            return payloadBuffer;
        };
        _it.unpackPayload = (payloadBuffer) => {
            /** @type {Payload} */
            const payload = {};
            // @ts-ignore
            payload.commandValue = payloadBuffer.readUInt8(0);
            // @ts-ignore
            payload.addressValue = payloadBuffer.readUInt16LE(1);
            payload.dataBuffer = payloadBuffer.slice(3);
            return payload;
        };
        _it.packData = (dataType, data) => {
            const dataBuffer = Buffer.alloc(dataType.length);
            for (const fieldType of dataType.fieldTypes) {
                const formatType = Formats.find(fieldType.format);
                /* istanbul ignore next */
                if (formatType == null) {
                    throw new Error();
                }
                const contentType = Contents.find(fieldType.content);
                /* istanbul ignore next */
                if (contentType == null) {
                    throw new Error();
                }
                formatType.write(dataBuffer, fieldType.begin, fieldType.end, contentType.encode(data[fieldType.name]));
            }
            return dataBuffer;
        };
        _it.unpackData = (dataType, dataBuffer) => {
            /** @type {Record<FieldName, any>} */
            const data = {};
            for (const fieldType of dataType.fieldTypes) {
                const formatType = Formats.find(fieldType.format);
                /* istanbul ignore next */
                if (formatType == null) {
                    throw new Error();
                }
                const contentType = Contents.find(fieldType.content);
                /* istanbul ignore next */
                if (contentType == null) {
                    throw new Error();
                }
                data[fieldType.name] = contentType.decode(formatType.read(dataBuffer, fieldType.begin, fieldType.end));
            }
            return data;
        };
        _it.selectCommandDataType = (addressType, commandType) => {
            switch (commandType.value) {
                case 0x01: {
                    return addressType.readCommandDataType;
                }
                case 0x02: {
                    return addressType.writeCommandDataType;
                }
                /* istanbul ignore next */
                default: {
                    return null;
                }
            }
        };
        _it.selectResponseDataType = (addressType, commandType) => {
            switch (commandType.value) {
                case 0x01: {
                    return addressType.readResponseDataType;
                }
                case 0x02: {
                    return addressType.writeResponseDataType;
                }
                case 0x81: {
                    return _it.errorResponseDataType;
                }
                case 0x82: {
                    return _it.errorResponseDataType;
                }
                case 0xFF: {
                    return _it.errorResponseDataType;
                }
                /* istanbul ignore next */
                default: {
                    return null;
                }
            }
        };

        /** @type {Utilities} */
        const it = {};
        it.UtilitiesConstructorOptions = () => {
            return _options;
        };
        it._Utilities = () => {
            return _it;
        };
        it.packCommandPayloadIntoFrameBuffer = (commandPayload) => {
            const commandType = Commands.find(commandPayload.command);
            /* istanbul ignore next */
            if (commandType == null) {
                throw new Error();
            }
            const addressType = Addresses.find(commandPayload.address);
            /* istanbul ignore next */
            if (addressType == null) {
                throw new Error();
            }
            const dataType = _it.selectCommandDataType(addressType, commandType);
            /* istanbul ignore next */
            if (dataType == null) {
                throw new Error();
            }
            const dataBuffer = _it.packData(dataType, commandPayload.data);
            /** @type {Payload} */
            const payload = {
                commandValue: commandType.value,
                addressValue: addressType.value,
                dataBuffer
            };
            const payloadBuffer = _it.packPayload(payload);
            /** @type {Frame} */
            // @ts-ignore
            const frame = {
                payloadBuffer
            };
            const frameBuffer = _it.packFrame(frame);
            return frameBuffer;
        };
        it.unpackResponsePayloadFromFrameBuffer = (frameBuffer) => {
            const frame = _it.unpackFrame(frameBuffer);
            const payload = _it.unpackPayload(frame.payloadBuffer);
            const commandType = Commands.find(payload.commandValue);
            /* istanbul ignore next */
            if (commandType == null) {
                throw new Error();
            }
            const addressType = Addresses.find(payload.addressValue);
            /* istanbul ignore next */
            if (addressType == null) {
                throw new Error();
            }
            const dataType = _it.selectResponseDataType(addressType, commandType);
            /* istanbul ignore next */
            if (dataType == null) {
                throw new Error();
            }
            const data = _it.unpackData(dataType, payload.dataBuffer);
            /** @type {ResponsePayload} */
            const responsePayload = {
                command: commandType.name,
                address: addressType.name,
                data
            };
            return responsePayload;
        };
        it.findAcceptableFrameRangesInBuffer = (buffer) => {
            /** @type {AcceptableFrameRangeArray} */
            const acceptableFrameRanges = [];
            let index = 0;
            while (index < buffer.length) {
                const frameOffset = buffer.indexOf(_it.frameHeaderBuffer, index);
                if (!(frameOffset >= 0)) {
                    break;
                }
                index = frameOffset + _it.frameHeaderBuffer.length;
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
                const crc16ValueCheck = _it.calculateCrc16Value(frameBuffer);
                if (!(crc16ValueCheck === 0)) {
                    continue;
                }
                /** @type {AcceptableFrameRange} */
                const acceptableFrameRange = {
                    start: frameOffset,
                    end: frameOffset + frameLength,
                    length: frameLength
                };
                acceptableFrameRanges.push(acceptableFrameRange);
            }
            return acceptableFrameRanges;
        };
        it.checkAllResponsePayloadsReceived = (commandPayload, responsePayloads) => {
            const addressType = Addresses.find(commandPayload.address);
            /* istanbul ignore next */
            if (addressType == null) {
                throw new Error();
            }
            switch (addressType.name) {
                case 'memoryDataLong': {
                    /** @type {MemoryDataLongReadCommandData} */
                    // @ts-ignore
                    const data = commandPayload.data;
                    return responsePayloads.every((responsePayload) => {
                        return responsePayload.address == commandPayload.address;
                    }) && responsePayloads.length == (data.memoryIndexEnd - data.memoryIndexStart + 1);
                }
                case 'memoryDataShort': {
                    /** @type {MemoryDataShortReadCommandData} */
                    // @ts-ignore
                    const data = commandPayload.data;
                    return responsePayloads.every((responsePayload) => {
                        return responsePayload.address == commandPayload.address;
                    }) && responsePayloads.length == (data.memoryIndexEnd - data.memoryIndexStart + 1);
                }
                default: {
                    return responsePayloads.every((responsePayload) => {
                        return responsePayload.address == commandPayload.address;
                    }) && responsePayloads.length == 1;
                }
            }
        };
        return it;

    };
    return { Utilities };

})();

module.exports = { Utilities: Utilities({}) };
