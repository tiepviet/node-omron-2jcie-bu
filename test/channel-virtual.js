/**
 * node-omron-2jcie-bu/test/channel-virtual.js
 * Copyright (C) e53e04ac
 * MIT License
 */

// @ts-nocheck

'use strict';

const MockBinding = require('@serialport/binding-mock');

const { Commands } = require('../src/lib/commands');
const { Addresses } = require('../src/lib/addresses');
const { Contents } = require('../src/lib/contents');
const { Utilities } = require('../src/lib/utilities');

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
                const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(this.buffer);
                if (acceptableFrameRanges.length > 0) {
                    const lastAcceptableRange = acceptableFrameRanges.slice(-1)[0];
                    const buffer = this.buffer.slice(0, lastAcceptableRange.end);
                    this.buffer = this.buffer.slice(lastAcceptableRange.end);
                    for (const acceptableFrameRange of acceptableFrameRanges) {
                        const frameBuffer = buffer.slice(acceptableFrameRange.start, acceptableFrameRange.end);
                        const commandFrame = Utilities._Utilities().unpackFrame(frameBuffer);
                        const commandPayload = Utilities._Utilities().unpackPayload(commandFrame.payloadBuffer);
                        const commandType = Commands.find(commandPayload.commandValue);
                        const addressType = Addresses.find(commandPayload.addressValue);
                        const commandDataType = Utilities._Utilities().selectCommandDataType(addressType, commandType);
                        const commandData = Utilities._Utilities().unpackData(commandDataType, commandPayload.dataBuffer);
                        const responseDataType = Utilities._Utilities().selectResponseDataType(addressType, commandType);
                        const responseData = {};
                        for (const fieldType of responseDataType.fieldTypes) {
                            const contentType = Contents.find(fieldType.content);
                            switch (fieldType.format) {
                                case 'SInt16':
                                case 'SInt32':
                                case 'UInt8':
                                case 'UInt16':
                                case 'UInt32':
                                    responseData[fieldType.name] = contentType.encode(0);
                                    break;
                                case 'UInt64':
                                    responseData[fieldType.name] = contentType.encode(BigInt(0));
                                    break;
                                case 'Utf8s':
                                    responseData[fieldType.name] = contentType.encode('');
                            }
                        }
                        const responseDataBuffer = Utilities._Utilities().packData(responseDataType, responseData);
                        const responsePayload = Utilities._Utilities().packPayload({
                            commandValue: commandType.value,
                            addressValue: addressType.value,
                            dataBuffer: responseDataBuffer
                        });
                        const responseFrame = Utilities._Utilities().packFrame({
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

module.exports = { ChannelVirtual };
