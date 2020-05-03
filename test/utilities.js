/* eslint-env mocha */

'use strict';

const expect = require('expect');

const Utilities = require('../lib/utilities');

describe('Utilities', () => {

    describe('.privateScope()', () => {

        it('<empty>', () => {
            const privateScope = Utilities.privateScope();
            expect(privateScope).toBeInstanceOf(Object);
        });

    });

    describe('.packCommandPayloadInFrameBuffer(commandPayload)', () => {

        it('<read command test>', () => {
            const frameBuffer = Utilities.packCommandPayloadInFrameBuffer({
                command: 'read',
                address: 'ledSettingNormalState',
                data: {},
            });
            expect(frameBuffer).toEqual(Buffer.from('52420500011151378b', 'hex'));
        });

        it('<write command test>', () => {
            const frameBuffer = Utilities.packCommandPayloadInFrameBuffer({
                command: 'write',
                address: 'ledSettingNormalState',
                data: {
                    displayRuleNormalState: 1,
                    intensityOfLedRed: 255,
                    intensityOfLedGreen: 255,
                    intensityOfLedBlue: 255,
                },
            });
            expect(frameBuffer).toEqual(Buffer.from('52420a000211510100ffffffa245', 'hex'));
        });

    });

    describe('.unpackResponsePayloadFromFrameBuffer(frameBuffer)', () => {

        it('<read response test>', () => {
            const responsePayload = Utilities.unpackResponsePayloadFromFrameBuffer(Buffer.from('52420a000111510100ffffffe250', 'hex'));
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

        it('<write response test>', () => {
            const responsePayload = Utilities.unpackResponsePayloadFromFrameBuffer(Buffer.from('52420a000211510100ffffffa245', 'hex'));
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

        it('<read error response test>', () => {
            const responsePayload = Utilities.unpackResponsePayloadFromFrameBuffer(Buffer.from('524206008111510122e5', 'hex'));
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

        it('<write error response test>', () => {
            const responsePayload = Utilities.unpackResponsePayloadFromFrameBuffer(Buffer.from('524206008211510122a1', 'hex'));
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

        it('<unknown response test>', () => {
            const responsePayload = Utilities.unpackResponsePayloadFromFrameBuffer(Buffer.from('52420600ff1151ffbb4d', 'hex'));
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

    describe('.readAcceptableFramesFromBuffer(buffer)', () => {

        it('[]', () => {
            const acceptableFrames = Utilities.readAcceptableFramesFromBuffer(Buffer.from('', 'hex'));
            expect(acceptableFrames).toEqual([]);
        });

        it('[H]', () => {
            const acceptableFrames = Utilities.readAcceptableFramesFromBuffer(Buffer.from('5242', 'hex'));
            expect(acceptableFrames).toEqual([]);
        });

        it('[H, L]', () => {
            const acceptableFrames = Utilities.readAcceptableFramesFromBuffer(Buffer.from('52420a00', 'hex'));
            expect(acceptableFrames).toEqual([]);
        });

        it('[H, L, P]', () => {
            const acceptableFrames = Utilities.readAcceptableFramesFromBuffer(Buffer.from('52420a000111510100ffffff', 'hex'));
            expect(acceptableFrames).toEqual([]);
        });

        it('[H, L, P, C]', () => {
            const acceptableFrames = Utilities.readAcceptableFramesFromBuffer(Buffer.from('52420a000111510100ffffffe250', 'hex'));
            expect(acceptableFrames).toEqual([
                {
                    frameOffset: 0,
                    frameLength: 14,
                    frameBuffer: Buffer.from('52420a000111510100ffffffe250', 'hex'),
                },
            ]);
        });

        it('[H, 0x0000, P, C]', () => {
            const acceptableFrames = Utilities.readAcceptableFramesFromBuffer(Buffer.from('524200000111510100ffffffe250', 'hex'));
            expect(acceptableFrames).toEqual([]);
        });

        it('[H, L, P, 0x0000]', () => {
            const acceptableFrames = Utilities.readAcceptableFramesFromBuffer(Buffer.from('52420a000111510100ffffff0000', 'hex'));
            expect(acceptableFrames).toEqual([]);
        });

        it('[..., H, L, P, C, ...]', () => {
            const acceptableFrames = Utilities.readAcceptableFramesFromBuffer(Buffer.from('1234567852420a000111510100ffffffe25012345678', 'hex'));
            expect(acceptableFrames).toEqual([
                {
                    frameOffset: 4,
                    frameLength: 14,
                    frameBuffer: Buffer.from('52420a000111510100ffffffe250', 'hex'),
                },
            ]);
        });

        it('[H, H, L, P, C]', () => {
            const acceptableFrames = Utilities.readAcceptableFramesFromBuffer(Buffer.from('524252420a000111510100ffffffe250', 'hex'));
            expect(acceptableFrames).toEqual([
                {
                    frameOffset: 2,
                    frameLength: 14,
                    frameBuffer: Buffer.from('52420a000111510100ffffffe250', 'hex'),
                },
            ]);
        });

        it('[H, L, H, L, P, C]', () => {
            const acceptableFrames = Utilities.readAcceptableFramesFromBuffer(Buffer.from('52420a0052420a000111510100ffffffe250', 'hex'));
            expect(acceptableFrames).toEqual([
                {
                    frameOffset: 4,
                    frameLength: 14,
                    frameBuffer: Buffer.from('52420a000111510100ffffffe250', 'hex'),
                },
            ]);
        });

        it('[H, L, P, H, L, P, C]', () => {
            const acceptableFrames = Utilities.readAcceptableFramesFromBuffer(Buffer.from('52420a000111510100ffffff52420a000111510100ffffffe250', 'hex'));
            expect(acceptableFrames).toEqual([
                {
                    frameOffset: 12,
                    frameLength: 14,
                    frameBuffer: Buffer.from('52420a000111510100ffffffe250', 'hex'),
                },
            ]);
        });

        it('[H, L, P, C, H, L, P, C]', () => {
            const acceptableFrames = Utilities.readAcceptableFramesFromBuffer(Buffer.from('52420a000111510100ffffffe25052420a000111510100ffffffe250', 'hex'));
            expect(acceptableFrames).toEqual([
                {
                    frameOffset: 0,
                    frameLength: 14,
                    frameBuffer: Buffer.from('52420a000111510100ffffffe250', 'hex'),
                },
                {
                    frameOffset: 14,
                    frameLength: 14,
                    frameBuffer: Buffer.from('52420a000111510100ffffffe250', 'hex'),
                },
            ]);
        });

        it('[H, L, P, C, ..., H, L, P, C]', () => {
            const acceptableFrames = Utilities.readAcceptableFramesFromBuffer(Buffer.from('52420a000111510100ffffffe2501234567852420a000111510100ffffffe250', 'hex'));
            expect(acceptableFrames).toEqual([
                {
                    frameOffset: 0,
                    frameLength: 14,
                    frameBuffer: Buffer.from('52420a000111510100ffffffe250', 'hex'),
                },
                {
                    frameOffset: 18,
                    frameLength: 14,
                    frameBuffer: Buffer.from('52420a000111510100ffffffe250', 'hex'),
                },
            ]);
        });

        it('[..., H, L, P, C, ..., H, L, P, C, ...]', () => {
            const acceptableFrames = Utilities.readAcceptableFramesFromBuffer(Buffer.from('12345652420a000111510100ffffffe2501234567852420a000111510100ffffffe250123456', 'hex'));
            expect(acceptableFrames).toEqual([
                {
                    frameOffset: 3,
                    frameLength: 14,
                    frameBuffer: Buffer.from('52420a000111510100ffffffe250', 'hex'),
                },
                {
                    frameOffset: 21,
                    frameLength: 14,
                    frameBuffer: Buffer.from('52420a000111510100ffffffe250', 'hex'),
                },
            ]);
        });

    });

});
