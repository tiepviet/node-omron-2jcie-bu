/**
 * node-omron-2jcie-bu/test/writer.test.js
 * Copyright (C) e53e04ac
 * MIT License
 */

// @ts-nocheck
/* eslint-env mocha */

'use strict';

const expect = require('expect');

const stream = require('stream');

const { Writer } = require('../src/lib/writer');

describe('Writer', () => {

    describe('.WriterConstructorOptions()', () => {

        const writer = Writer({});

        it('<type test>', () => {
            const _options = writer.WriterConstructorOptions();
            expect(_options).toBeInstanceOf(Object);
        });

    });

    describe('._Writer()', () => {

        const writer = Writer({});

        it('<type test>', () => {
            const _it = writer._Writer();
            expect(_it).toBeInstanceOf(Object);
        });

    });

    describe('.input()', () => {

        const writer = Writer({});

        it('<type test>', () => {
            const input = writer.input();
            expect(input).toBeInstanceOf(stream.Stream);
        });

    });

    describe('.output()', () => {

        const writer = Writer({});

        it('<type test>', () => {
            const output = writer.output();
            expect(output).toBeInstanceOf(stream.Stream);
        });

    });

    describe('I/O', () => {

        const test = (commandPayloads) => {
            return new Promise((resolve, _reject) => {
                const frameBuffers = [];
                const writer = Writer({});
                writer.output().on('end', () => {
                    resolve(frameBuffers);
                });
                writer.output().on('data', (frameBuffer) => {
                    frameBuffers.push(frameBuffer);
                });
                setImmediate(() => {
                    for (const commandPayload of commandPayloads) {
                        writer.input().write(commandPayload);
                    }
                    writer.input().end();
                });
            });
        };

        it('<read command test>', () => {
            return test([
                {
                    command: 'read',
                    address: 'ledSettingNormalState',
                    data: {},
                },
            ]).then((frameBuffers) => {
                expect(frameBuffers).toEqual([
                    Buffer.from('52420500011151378b', 'hex'),
                ]);
            });
        });

        it('<write command test>', () => {
            return test([
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
            ]).then((frameBuffers) => {
                expect(frameBuffers).toEqual([
                    Buffer.from('52420a000211510100ffffffa245', 'hex'),
                ]);
            });
        });

    });

});
