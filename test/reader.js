/* eslint-env mocha */

'use strict';

const expect = require('expect');

const stream = require('stream');

const Reader = require('../lib/reader');

describe('Reader', () => {

    describe('.privateScope()', () => {

        const reader = Reader();

        it('<type test>', () => {
            const privateScope = reader.privateScope();
            expect(privateScope).toBeInstanceOf(Object);
        });

    });

    describe('.input()', () => {

        const reader = Reader();

        it('<type test>', () => {
            const input = reader.input();
            expect(input).toBeInstanceOf(stream.Stream);
        });

    });

    describe('.output()', () => {

        const reader = Reader();

        it('<type test>', () => {
            const output = reader.output();
            expect(output).toBeInstanceOf(stream.Stream);
        });

    });

    describe('I/O', () => {

        const test = (buffers, stride) => {
            return new Promise((resolve, _reject) => {
                const frameBuffers = [];
                const reader = Reader();
                reader.output().on('end', () => {
                    resolve(frameBuffers);
                });
                reader.output().on('data', (frameBuffer) => {
                    frameBuffers.push(frameBuffer);
                });
                setImmediate(() => {
                    for (const buffer of buffers) {
                        if (stride <= 0) {
                            reader.input().write(buffer);
                        } else {
                            for (let index = 0; index < buffer.length; index += stride) {
                                reader.input().write(buffer.slice(index, index + stride));
                            }
                        }
                    }
                    reader.input().end();
                });
            });
        };

        it('<read response test>', () => {
            return test([
                Buffer.from('52420a000111510100ffffffe250', 'hex'),
            ], 1).then((responsePayloads) => {
                expect(responsePayloads).toEqual([
                    {
                        command: 'read',
                        address: 'ledSettingNormalState',
                        data: {
                            displayRuleNormalState: 1,
                            intensityOfLedRed: 255,
                            intensityOfLedGreen: 255,
                            intensityOfLedBlue: 255,
                        },
                    },
                ]);
            });
        });

        it('<write response test>', () => {
            return test([
                Buffer.from('52420a000211510100ffffffa245', 'hex'),
            ], 1).then((responsePayloads) => {
                expect(responsePayloads).toEqual([
                    {
                        command: 'write',
                        address: 'ledSettingNormalState',
                        data: {
                            displayRuleNormalState: 1,
                            intensityOfLedRed: 255,
                            intensityOfLedGreen: 255,
                            intensityOfLedBlue: 255,
                        },
                    },
                ]);
            });
        });

        it('<read error response test>', () => {
            return test([
                Buffer.from('524206008111510122e5', 'hex')
            ], 1).then((responsePayloads) => {
                expect(responsePayloads).toEqual([
                    {
                        command: 'readError',
                        address: 'ledSettingNormalState',
                        data: {
                            code: {
                                raw: 0x01,
                                crcError: true,
                            },
                        },
                    },
                ]);
            });
        });

        it('<write error response test>', () => {
            return test([
                Buffer.from('524206008211510122a1', 'hex')
            ], 1).then((responsePayloads) => {
                expect(responsePayloads).toEqual([
                    {
                        command: 'writeError',
                        address: 'ledSettingNormalState',
                        data: {
                            code: {
                                raw: 0x01,
                                crcError: true,
                            },
                        },
                    },
                ]);
            });
        });

        it('<unknown response test>', () => {
            return test([
                Buffer.from('52420600ff1151ffbb4d', 'hex')
            ], 1).then((responsePayloads) => {
                expect(responsePayloads).toEqual([
                    {
                        command: 'unknown',
                        address: 'ledSettingNormalState',
                        data: {
                            code: {
                                raw: 0xff,
                            },
                        },
                    },
                ]);
            });
        });

    });

});
