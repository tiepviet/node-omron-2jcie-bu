/**
 * node-omron-2jcie-bu/test/queue.test.js
 * Copyright (C) e53e04ac
 * MIT License
 */

// @ts-nocheck
/* eslint-env mocha */

'use strict';

const expect = require('expect');

const stream = require('stream');

const { Queue } = require('../src/lib/queue');

describe('Queue', () => {

    describe('.QueueConstructorOptions()', () => {

        const queue = Queue({});

        it('<type test>', () => {
            const _options = queue.QueueConstructorOptions();
            expect(_options).toBeInstanceOf(Object);
        });

    });

    describe('._Queue()', () => {

        const queue = Queue({});

        it('<type test>', () => {
            const _it = queue._Queue();
            expect(_it).toBeInstanceOf(Object);
        });

    });

    describe('.input()', () => {

        const queue = Queue({});

        it('<type test>', () => {
            const input = queue.input();
            expect(input).toBeInstanceOf(stream.Stream);
        });

    });

    describe('.output()', () => {

        const queue = Queue({});

        it('<type test>', () => {
            const output = queue.output();
            expect(output).toBeInstanceOf(stream.Stream);
        });

    });

    describe('.enqueue(commandPayload)', () => {

        it('<read response test>', () => {
            const queue = Queue({});
            const task = queue.enqueue({
                command: 'read',
                address: 'ledSettingNormalState',
                data: {},
            });
            queue.input().once('data', () => {
                setTimeout(() => {
                    queue.output().write({
                        command: 'read',
                        address: 'ledSettingNormalState',
                        data: {
                            displayRuleNormalState: 1,
                            intensityOfLedRed: 255,
                            intensityOfLedGreen: 255,
                            intensityOfLedBlue: 255,
                        },
                    });
                }, 50);
            });
            return task.promise.then((responsePayloads) => {
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
                    }
                ]);
            });
        });

        it('<write response test>', () => {
            const queue = Queue({});
            const task = queue.enqueue({
                command: 'write',
                address: 'ledSettingNormalState',
                data: {
                    displayRuleNormalState: 1,
                    intensityOfLedRed: 255,
                    intensityOfLedGreen: 255,
                    intensityOfLedBlue: 255,
                },
            });
            queue.input().once('data', () => {
                setTimeout(() => {
                    queue.output().write({
                        command: 'write',
                        address: 'ledSettingNormalState',
                        data: {
                            displayRuleNormalState: 1,
                            intensityOfLedRed: 255,
                            intensityOfLedGreen: 255,
                            intensityOfLedBlue: 255,
                        },
                    });
                }, 50);
            });
            return task.promise.then((responsePayloads) => {
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
                    }
                ]);
            });
        });

        it('<read error response test>', () => {
            const queue = Queue({});
            const task = queue.enqueue({
                command: 'read',
                address: 'ledSettingNormalState',
                data: {},
            })
            queue.input().once('data', () => {
                setTimeout(() => {
                    queue.output().write({
                        command: 'readError',
                        address: 'ledSettingNormalState',
                        data: {
                            code: 0x01,
                        },
                    });
                }, 50);
            });
            return task.promise.then((responsePayloads) => {
                expect(responsePayloads).toEqual([
                    {
                        command: 'readError',
                        address: 'ledSettingNormalState',
                        data: {
                            code: 0x01,
                        },
                    }
                ]);
            });
        });

        it('<write error response test>', () => {
            const queue = Queue({});
            const task = queue.enqueue({
                command: 'write',
                address: 'ledSettingNormalState',
                data: {
                    displayRuleNormalState: 1,
                    intensityOfLedRed: 255,
                    intensityOfLedGreen: 255,
                    intensityOfLedBlue: 255,
                },
            });
            queue.input().once('data', () => {
                setTimeout(() => {
                    queue.output().write({
                        command: 'writeError',
                        address: 'ledSettingNormalState',
                        data: {
                            code: 0x01,
                        },
                    });
                }, 50);
            });
            return task.promise.then((responsePayloads) => {
                expect(responsePayloads).toEqual([
                    {
                        command: 'writeError',
                        address: 'ledSettingNormalState',
                        data: {
                            code: 0x01,
                        },
                    }
                ]);
            });
        });

        it('<unknown response test>', () => {
            const queue = Queue({});
            const task = queue.enqueue({
                command: 'write',
                address: 'ledSettingNormalState',
                data: {
                    displayRuleNormalState: 1,
                    intensityOfLedRed: 255,
                    intensityOfLedGreen: 255,
                    intensityOfLedBlue: 255,
                },
            });
            queue.input().once('data', () => {
                setTimeout(() => {
                    queue.output().write({
                        command: 'unknown',
                        address: 'ledSettingNormalState',
                        data: {
                            code: 0x01,
                        },
                    });
                }, 50);
            });
            return task.promise.then((responsePayloads) => {
                expect(responsePayloads).toEqual([
                    {
                        command: 'unknown',
                        address: 'ledSettingNormalState',
                        data: {
                            code: 0x01,
                        },
                    }
                ]);
            });
        });

        it('<multiple responses test>', () => {
            const queue = Queue({});
            const task = queue.enqueue({
                command: 'read',
                address: 'memoryDataShort',
                data: {
                    memoryIndexStart: 1,
                    memoryIndexEnd: 2,
                },
            });
            queue.input().once('data', () => {
                setTimeout(() => {
                    queue.output().write({
                        command: 'read',
                        address: 'memoryDataShort',
                        data: {
                            memoryIndex: 1,
                            timeCounter: 0,
                            temperature: 0,
                            relativeHumidity: 0,
                            ambientLight: 0,
                            barometricPressure: 0,
                            soundNoise: 0,
                            etvoc: 0,
                            eco2: 0,
                            discomfortIndex: 0,
                            heatStroke: 0,
                        },
                    });
                    setTimeout(() => {
                        queue.output().write({
                            command: 'read',
                            address: 'memoryDataShort',
                            data: {
                                memoryIndex: 2,
                                timeCounter: 0,
                                temperature: 0,
                                relativeHumidity: 0,
                                ambientLight: 0,
                                barometricPressure: 0,
                                soundNoise: 0,
                                etvoc: 0,
                                eco2: 0,
                                discomfortIndex: 0,
                                heatStroke: 0,
                            },
                        });
                    }, 50);
                }, 50);
            });
            return task.promise.then((responsePayloads) => {
                expect(responsePayloads).toEqual([
                    {
                        command: 'read',
                        address: 'memoryDataShort',
                        data: {
                            memoryIndex: 1,
                            timeCounter: 0,
                            temperature: 0,
                            relativeHumidity: 0,
                            ambientLight: 0,
                            barometricPressure: 0,
                            soundNoise: 0,
                            etvoc: 0,
                            eco2: 0,
                            discomfortIndex: 0,
                            heatStroke: 0,
                        },
                    },
                    {
                        command: 'read',
                        address: 'memoryDataShort',
                        data: {
                            memoryIndex: 2,
                            timeCounter: 0,
                            temperature: 0,
                            relativeHumidity: 0,
                            ambientLight: 0,
                            barometricPressure: 0,
                            soundNoise: 0,
                            etvoc: 0,
                            eco2: 0,
                            discomfortIndex: 0,
                            heatStroke: 0,
                        },
                    },
                ]);
            });
        });

        it('<busy test>', () => {
            const queue = Queue({});
            const tasks = [];
            tasks.push(queue.enqueue({
                command: 'read',
                address: 'ledSettingNormalState',
                data: {},
            }));
            tasks.push(queue.enqueue({
                command: 'read',
                address: 'ledSettingNormalState',
                data: {},
            }));
            queue.output().on('data', () => {
                setTimeout(() => {
                    queue.input().write({
                        command: 'read',
                        address: 'ledSettingNormalState',
                        data: {
                            displayRuleNormalState: 1,
                            intensityOfLedRed: 255,
                            intensityOfLedGreen: 255,
                            intensityOfLedBlue: 255,
                        },
                    });
                }, 50);
            });
            return Promise.all(tasks.map((task) => {
                return task.promise.then((responsePayloads) => {
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
                        }
                    ]);
                });
            }));
        });

        it('<timeout response test>', () => {
            const queue = Queue({});
            const task = queue.enqueue({
                command: 'write',
                address: 'ledSettingNormalState',
                data: {
                    displayRuleNormalState: 1,
                    intensityOfLedRed: 255,
                    intensityOfLedGreen: 255,
                    intensityOfLedBlue: 255,
                },
            });
            queue.input().once('data', () => {
                // noop
            });
            return task.promise.then((_responsePayloads) => {
                throw new Error();
            }, (error) => {
                expect(error).toEqual({
                    timeout: true,
                });
            });
        });

        it('<abort test>', () => {
            const queue = Queue({});
            const task = queue.enqueue({
                command: 'write',
                address: 'ledSettingNormalState',
                data: {
                    displayRuleNormalState: 1,
                    intensityOfLedRed: 255,
                    intensityOfLedGreen: 255,
                    intensityOfLedBlue: 255,
                },
            });
            queue.output().once('data', () => {
                setImmediate(() => {
                    task.abort();
                });
            });
            return task.promise.then((_responsePayloads) => {
                throw new Error();
            }, (error) => {
                expect(error).toEqual({
                    abort: true,
                });
            });
        });

        it('<abort twice test>', () => {
            const queue = Queue({});
            const task = queue.enqueue({
                command: 'write',
                address: 'ledSettingNormalState',
                data: {
                    displayRuleNormalState: 1,
                    intensityOfLedRed: 255,
                    intensityOfLedGreen: 255,
                    intensityOfLedBlue: 255,
                },
            });
            queue.output().once('data', () => {
                setImmediate(() => {
                    task.abort();
                    task.abort();
                });
            });
            return task.promise.then((_responsePayloads) => {
                throw new Error();
            }, (error) => {
                expect(error).toEqual({
                    abort: true,
                });
            });
        });

        it('<disordered response test>', () => {
            const queue = Queue({});
            queue.input().write({
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
