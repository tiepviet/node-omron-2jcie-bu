'use strict';

/**
 * @private
 */
const stream = require('stream');

/**
 * @private
 */
const MockBinding = require('@serialport/binding-mock');

/**
 * @private
 */
const Commands = require('../lib/commands');

/**
 * @private
 */
const Addresses = require('../lib/addresses');

/**
 * @private
 */
const Units = require('../lib/units');

/**
 * @private
 */
const Utilities = require('../lib/utilities');

/**
 * @public
 * @function
 * @param {{
 *   SerialPort: typeof import('serialport');
 * }} options
 * @return {void} 
 */
const ChannelVirtual = (options) => {
    const virtual = {};
    virtual.path = ':virtual:';
    virtual.Binding = class extends MockBinding {
        constructor(opt) {
            super(opt);
            this.buffer = Buffer.alloc(0);
        }
        write(buffer) {
            return new Promise((resolve, _reject) => {
                this.buffer = Buffer.concat([this.buffer, buffer]);
                const frames = Utilities.readAcceptableFramesFromBuffer(this.buffer);
                if (frames.length > 0) {
                    const frame = frames.slice(-1)[0];
                    this.buffer = this.buffer.slice(frame.frameOffset + frame.frameLength);
                    for (const frame of frames) {
                        const commandFrame = Utilities.privateScope().unpackFrame(frame.frameBuffer);
                        const commandPayload = Utilities.privateScope().unpackPayload(commandFrame.payloadBuffer);
                        const commandType = Commands.find(commandPayload.commandValue);
                        const addressType = Addresses.find(commandPayload.addressValue);
                        const commandDataType = Utilities.privateScope().selectCommandDataType(addressType, commandType);
                        const commandData = Utilities.privateScope().unpackData(commandDataType, commandPayload.dataBuffer);
                        const responseDataType = Utilities.privateScope().selectResponseDataType(addressType, commandType);
                        const responseData = {};
                        for (const field of responseDataType.fields) {
                            const unitType = Units.find(field.unit);
                            switch (field.format) {
                                case 'SInt16':
                                case 'SInt32':
                                case 'UInt8':
                                case 'UInt16':
                                case 'UInt32':
                                    responseData[field.name] = unitType.encode(0);
                                    break;
                                case 'UInt64':
                                    responseData[field.name] = unitType.encode(BigInt(0));
                                    break;
                                case 'Utf8s':
                                    responseData[field.name] = unitType.encode('');
                            }
                        }
                        const responseDataBuffer = Utilities.privateScope().packData(responseDataType, responseData);
                        const responsePayload = Utilities.privateScope().packPayload({
                            commandValue: commandType.value,
                            addressValue: addressType.value,
                            dataBuffer: responseDataBuffer
                        });
                        const responseFrame = Utilities.privateScope().packFrame({
                            payloadBuffer: responsePayload
                        });
                        this.emitData(responseFrame);
                    }
                }
                resolve();
            });
        }
    };
    options.SerialPort.Binding = virtual.Binding;
    virtual.Binding.createPort(virtual.path);
    return virtual.path;
};

/**
 * @public
 */
module.exports = ChannelVirtual;
