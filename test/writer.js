'use strict';

const expect = require('expect');

const stream = require('stream');

const Writer = require('../lib/writer');

describe('Writer', () => {

    describe('.privateScope()', () => {

        const writer = Writer();

        it('<empty>', () => {
            const privateScope = writer.privateScope();
            expect(privateScope).toBeInstanceOf(Object);
        });

    });

    describe('.input()', () => {

        const writer = Writer();

        it('<empty>', () => {
            const input = writer.input();
            expect(input).toBeInstanceOf(stream.Stream);
        });

    });

    describe('.output()', () => {

        const writer = Writer();

        it('<empty>', () => {
            const output = writer.output();
            expect(output).toBeInstanceOf(stream.Stream);
        });

    });

    describe('.input().write(commandPayload)', () => {

        const writeAndOnceData = (writer, commandPayload) => {
            return new Promise((resolve) => {
                writer.output().once('data', (data) => {
                    resolve(data);
                });
                setImmediate(() => {
                    writer.input().write(commandPayload);
                });
            });
        };

        it('<read command test>: { read, ledSettingNormalState, {} }', () => {
            const writer = Writer();
            return writeAndOnceData(writer, {
                command: 'read',
                address: 'ledSettingNormalState',
                data: {},
            }).then((frameBuffer) => {
                expect(frameBuffer).toEqual(Buffer.from('52420500011151378b', 'hex'));
            });
        });

        it('<write command test>: { write, ledSettingNormalState, { 1, 255, 255, 255 } }', () => {
            const writer = Writer();
            return writeAndOnceData(writer, {
                command: 'write',
                address: 'ledSettingNormalState',
                data: {
                    displayRuleNormalState: 1,
                    intensityOfLedRed: 255,
                    intensityOfLedGreen: 255,
                    intensityOfLedBlue: 255,
                },
            }).then((frameBuffer) => {
                expect(frameBuffer).toEqual(Buffer.from('52420a000211510100ffffffa245', 'hex'));
            });
        });

    });

    describe('.input().end()', () => {

        const writer = Writer();

        it('<empty>', (callback) => {
            writer.output().once('finish', () => {
                callback();
            });
            writer.input().end();
        });

    });

});
