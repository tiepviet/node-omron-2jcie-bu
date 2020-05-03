/* eslint-env mocha */

'use strict';

const expect = require('expect');

const stream = require('stream');

const Queue = require('../lib/queue');

describe('Queue', () => {

    describe('.privateScope()', () => {

        const queue = Queue();

        it('<empty>', () => {
            const privateScope = queue.privateScope();
            expect(privateScope).toBeInstanceOf(Object);
        });

    });

    describe('.input()', () => {

        const queue = Queue();

        it('<empty>', () => {
            const input = queue.input();
            expect(input).toBeInstanceOf(stream.Stream);
        });

    });

    describe('.output()', () => {

        const queue = Queue();

        it('<empty>', () => {
            const output = queue.output();
            expect(output).toBeInstanceOf(stream.Stream);
        });

    });

    describe('.enqueue(commandPayload)', () => {

        it('<read command test>', () => {
            const queue = Queue();
            queue.output().once('data', () => {
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
            return queue.enqueue({
                command: 'read',
                address: 'ledSettingNormalState',
                data: {},
            }).then((responsePayload) => {
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
            }, (error) => {
                throw error;
            });
        });

        it('<write command test>', () => {
            const queue = Queue();
            queue.output().once('data', () => {
                setTimeout(() => {
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
                }, 50);
            });
            return queue.enqueue({
                command: 'write',
                address: 'ledSettingNormalState',
                data: {},
            }).then((responsePayload) => {
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
            }, (error) => {
                throw error;
            });
        });

        it('<read error command test>', () => {
            const queue = Queue();
            queue.output().once('data', () => {
                setTimeout(() => {
                    queue.input().write({
                        command: 'readError',
                        address: 'ledSettingNormalState',
                        data: {
                            code: 0x01,
                        },
                    });
                }, 50);
            });
            return queue.enqueue({
                command: 'read',
                address: 'ledSettingNormalState',
                data: {},
            }).then((_responsePayload) => {
                throw new Error();
            }, (error) => {
                expect(error.command).toBe('readError');
            });
        });

        it('<write error command test>', () => {
            const queue = Queue();
            queue.output().once('data', () => {
                setTimeout(() => {
                    queue.input().write({
                        command: 'writeError',
                        address: 'ledSettingNormalState',
                        data: {
                            code: 0x01,
                        },
                    });
                }, 50);
            });
            return queue.enqueue({
                command: 'write',
                address: 'ledSettingNormalState',
                data: {
                    displayRuleNormalState: 1,
                    intensityOfLedRed: 255,
                    intensityOfLedGreen: 255,
                    intensityOfLedBlue: 255,
                },
            }).then((_responsePayload) => {
                throw new Error();
            }, (error) => {
                expect(error.command).toBe('writeError');
            });
        });

        it('<unknown command test>', () => {
            const queue = Queue();
            queue.output().once('data', () => {
                setTimeout(() => {
                    queue.input().write({
                        command: 'unknown',
                        address: 'ledSettingNormalState',
                        data: {
                            code: 0x01,
                        },
                    });
                }, 50);
            });
            return queue.enqueue({
                command: 'write',
                address: 'ledSettingNormalState',
                data: {
                    displayRuleNormalState: 1,
                    intensityOfLedRed: 255,
                    intensityOfLedGreen: 255,
                    intensityOfLedBlue: 255,
                },
            }).then((_responsePayload) => {
                throw new Error();
            }, (error) => {
                expect(error.command).toBe('unknown');
            });
        });

        it('<busy test>', () => {
            const queue = Queue();
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
            return Promise.all([
                queue.enqueue({
                    command: 'read',
                    address: 'ledSettingNormalState',
                    data: {},
                }).then((responsePayload) => {
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
                }, (error) => {
                    throw error;
                }),
                queue.enqueue({
                    command: 'read',
                    address: 'ledSettingNormalState',
                    data: {},
                }).then((responsePayload) => {
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
                }, (error) => {
                    throw error;
                }),
            ]);
        });

        it('<timeout test>', () => {
            const queue = Queue();
            queue.output().once('data', () => {
                // noop
            });
            return queue.enqueue({
                command: 'write',
                address: 'ledSettingNormalState',
                data: {
                    displayRuleNormalState: 1,
                    intensityOfLedRed: 255,
                    intensityOfLedGreen: 255,
                    intensityOfLedBlue: 255,
                },
            }).then((_responsePayload) => {
                throw new Error();
            }, (error) => {
                expect(error.timeout).toBe(true);
            });
        });

        it('<disorder>', (callback) => {
            const queue = Queue();
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
            callback();
        });

    });

});
