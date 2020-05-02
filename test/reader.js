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

        const writeBufferStepByStep = (stream, buffer) => {
            for (const chunk of buffer) {
                stream.write(Buffer.from([chunk]));
            }
        };

        const writeAndOnceData = (reader, frameBuffer) => {
            return new Promise((resolve) => {
                reader.output().once('data', (data) => {
                    resolve(data);
                });
                setImmediate(() => {
                    writeBufferStepByStep(reader.input(), frameBuffer);
                });
            });
        };

        it('<read response test>: 0x52420a000111510100ffffffe250', () => {
            const reader = Reader();
            return writeAndOnceData(reader, Buffer.from('52420a000111510100ffffffe250', 'hex')).then((responsePayload) => {
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

        it('<write response test>: 0x52420a000211510100ffffffa245', () => {
            const reader = Reader();
            return writeAndOnceData(reader, Buffer.from('52420a000211510100ffffffa245', 'hex')).then((responsePayload) => {
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

        it('<read error response test>: 0x524206008111510122e5', () => {
            const reader = Reader();
            return writeAndOnceData(reader, Buffer.from('524206008111510122e5', 'hex')).then((responsePayload) => {
                expect(responsePayload).toEqual({
                    command: 'readError',
                    address: 'ledSettingNormalState',
                    data: {
                        code: 0x01,
                    },
                });
            });
        });

        it('<write error response test>: 0x524206008211510122a1', () => {
            const reader = Reader();
            return writeAndOnceData(reader, Buffer.from('524206008211510122a1', 'hex')).then((responsePayload) => {
                expect(responsePayload).toEqual({
                    command: 'writeError',
                    address: 'ledSettingNormalState',
                    data: {
                        code: 0x01,
                    },
                });
            });
        });

        it('<unknown response test>: 0x52420600ff1151ffbb4d', () => {
            const reader = Reader();
            return writeAndOnceData(reader, Buffer.from('52420600ff1151ffbb4d', 'hex')).then((responsePayload) => {
                expect(responsePayload).toEqual({
                    command: 'unknown',
                    address: 'ledSettingNormalState',
                    data: {
                        code: 0xff,
                    },
                });
            });
        });

        it('<sync test 1>: 0x1234567852420a000211510100ffffffa245', () => {
            const reader = Reader();
            return writeAndOnceData(reader, Buffer.from('1234567852420a000211510100ffffffa245', 'hex')).then((responsePayload) => {
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

        it('<sync test 2>: 0x52420a0052420a000211510100ffffffa245', () => {
            const reader = Reader();
            return writeAndOnceData(reader, Buffer.from('52420a0052420a000211510100ffffffa245', 'hex')).then((responsePayload) => {
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

        it('<crc test 1>: 0x52420a000211510100ffffff000052420a000211510100ffffffa245', () => {
            const reader = Reader();
            return writeAndOnceData(reader, Buffer.from('52420a000211510100ffffff000052420a000211510100ffffffa245', 'hex')).then((responsePayload) => {
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

        it('<crc test 2>: 0x52420a000211511234ffffffa24552420a000211510100ffffffa245', () => {
            const reader = Reader();
            return writeAndOnceData(reader, Buffer.from('52420a000211511234ffffffa24552420a000211510100ffffffa245', 'hex')).then((responsePayload) => {
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
