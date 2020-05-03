/* eslint-env mocha */

'use strict';

const expect = require('expect');

const stream = require('stream');

const Reader = require('../lib/reader');

describe('Reader', () => {

    describe('.privateScope()', () => {

        const reader = Reader();

        it('<empty>', () => {
            const privateScope = reader.privateScope();
            expect(privateScope).toBeInstanceOf(Object);
        });

    });

    describe('.input()', () => {

        const reader = Reader();

        it('<empty>', () => {
            const input = reader.input();
            expect(input).toBeInstanceOf(stream.Stream);
        });

    });

    describe('.output()', () => {

        const reader = Reader();

        it('<empty>', () => {
            const output = reader.output();
            expect(output).toBeInstanceOf(stream.Stream);
        });

    });

    describe('.input().write(commandPayload)', () => {

        const writeAndOnceData = (reader, frameBuffer, stepByStep) => {
            return new Promise((resolve) => {
                reader.output().once('data', (data) => {
                    resolve(data);
                });
                setImmediate(() => {
                    if (stepByStep) {
                        for (const chunk of frameBuffer) {
                            reader.input().write(Buffer.from([chunk]));
                        }
                    } else {
                        reader.input().write(frameBuffer);
                    }
                });
            });
        };

        it('<read response test>', () => {
            const reader = Reader();
            return writeAndOnceData(reader, Buffer.from('52420a000111510100ffffffe250', 'hex'), true).then((responsePayload) => {
                expect(responsePayload).toEqual({
                    command: 'read',
                    address: 'ledSettingNormalState',
                    data: {
                        displayRuleNormalState: 1,
                        intensityOfLedRed: 255,
                        intensityOfLedGreen: 255,
                        intensityOfLedBlue: 255,
                    },
                });
            });
        });

        it('<write response test>', () => {
            const reader = Reader();
            return writeAndOnceData(reader, Buffer.from('52420a000211510100ffffffa245', 'hex'), true).then((responsePayload) => {
                expect(responsePayload).toEqual({
                    command: 'write',
                    address: 'ledSettingNormalState',
                    data: {
                        displayRuleNormalState: 1,
                        intensityOfLedRed: 255,
                        intensityOfLedGreen: 255,
                        intensityOfLedBlue: 255,
                    },
                });
            });
        });

        it('<read error response test>', () => {
            const reader = Reader();
            return writeAndOnceData(reader, Buffer.from('524206008111510122e5', 'hex'), true).then((responsePayload) => {
                expect(responsePayload).toEqual({
                    command: 'readError',
                    address: 'ledSettingNormalState',
                    data: {
                        code: {
                            _rawValue: 0x01,
                            crcError: true,
                            commandError: false,
                            addressError: false,
                            lengthError: false,
                            dataError: false,
                            busy: false,
                        },
                    },
                });
            });
        });

        it('<write error response test>', () => {
            const reader = Reader();
            return writeAndOnceData(reader, Buffer.from('524206008211510122a1', 'hex'), true).then((responsePayload) => {
                expect(responsePayload).toEqual({
                    command: 'writeError',
                    address: 'ledSettingNormalState',
                    data: {
                        code: {
                            _rawValue: 0x01,
                            crcError: true,
                            commandError: false,
                            addressError: false,
                            lengthError: false,
                            dataError: false,
                            busy: false,
                        },
                    },
                });
            });
        });

        it('<unknown response test>', () => {
            const reader = Reader();
            return writeAndOnceData(reader, Buffer.from('52420600ff1151ffbb4d', 'hex'), true).then((responsePayload) => {
                expect(responsePayload).toEqual({
                    command: 'unknown',
                    address: 'ledSettingNormalState',
                    data: {
                        code: {
                            _rawValue: 0xff,
                            crcError: false,
                            commandError: false,
                            addressError: false,
                            lengthError: false,
                            dataError: false,
                            busy: false,
                        },
                    },
                });
            });
        });

    });

    describe('.input().end()', () => {

        const reader = Reader();

        it('<empty>', (callback) => {
            reader.output().once('finish', () => {
                callback();
            });
            reader.input().end();
        });

    });

    describe('.reset()', () => {

        const reader = Reader();

        it('<empty>', (callback) => {
            reader.reset();
            callback();
        });

    });

});
