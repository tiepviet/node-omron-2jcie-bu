/**
 * node-omron-2jcie-bu/test/utilities.test.js
 * Copyright (C) e53e04ac
 * MIT License
 */

// @ts-nocheck
/* eslint-env mocha */

'use strict';

const expect = require('expect');

const { Utilities } = require('../src/lib/utilities');

describe('Utilities', () => {

    describe('.UtilitiesConstructorOptions()', () => {

        it('<type test>', () => {
            const _options = Utilities.UtilitiesConstructorOptions();
            expect(_options).toBeInstanceOf(Object);
        });

    });

    describe('._Utilities()', () => {

        it('<type test>', () => {
            const _it = Utilities._Utilities();
            expect(_it).toBeInstanceOf(Object);
        });

    });

    describe('.packCommandPayloadIntoFrameBuffer(commandPayload)', () => {

        it('<read command test>', () => {
            const frameBuffer = Utilities.packCommandPayloadIntoFrameBuffer({
                command: 'read',
                address: 'ledSettingNormalState',
                data: {},
            });
            expect(frameBuffer).toEqual(Buffer.from('52420500011151378b', 'hex'));
        });

        it('<write command test>', () => {
            const frameBuffer = Utilities.packCommandPayloadIntoFrameBuffer({
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
                        raw: 0x01,
                        crcError: true,
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
                        raw: 0x01,
                        crcError: true,
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
                        raw: 0xff,
                    },
                },
            });
        });

    });

    describe('.findAcceptableFrameRangesInBuffer(buffer)', () => {

        it('[]', () => {
            const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(Buffer.from('', 'hex'));
            expect(acceptableFrameRanges).toEqual([]);
        });

        it('[H]', () => {
            const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(Buffer.from('5242', 'hex'));
            expect(acceptableFrameRanges).toEqual([]);
        });

        it('[H, L]', () => {
            const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(Buffer.from('52420a00', 'hex'));
            expect(acceptableFrameRanges).toEqual([]);
        });

        it('[H, L, P]', () => {
            const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(Buffer.from('52420a000111510100ffffff', 'hex'));
            expect(acceptableFrameRanges).toEqual([]);
        });

        it('[H, L, P, C]', () => {
            const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(Buffer.from('52420a000111510100ffffffe250', 'hex'));
            expect(acceptableFrameRanges).toEqual([
                {
                    start: 0,
                    end: 14,
                    length: 14,
                },
            ]);
        });

        it('[H, 0x0000, P, C]', () => {
            const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(Buffer.from('524200000111510100ffffffe250', 'hex'));
            expect(acceptableFrameRanges).toEqual([]);
        });

        it('[H, L, P, 0x0000]', () => {
            const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(Buffer.from('52420a000111510100ffffff0000', 'hex'));
            expect(acceptableFrameRanges).toEqual([]);
        });

        it('[..., H, L, P, C, ...]', () => {
            const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(Buffer.from('1234567852420a000111510100ffffffe25012345678', 'hex'));
            expect(acceptableFrameRanges).toEqual([
                {
                    start: 4,
                    end: 18,
                    length: 14,
                },
            ]);
        });

        it('[H, H, L, P, C]', () => {
            const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(Buffer.from('524252420a000111510100ffffffe250', 'hex'));
            expect(acceptableFrameRanges).toEqual([
                {
                    start: 2,
                    end: 16,
                    length: 14,
                },
            ]);
        });

        it('[H, L, H, L, P, C]', () => {
            const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(Buffer.from('52420a0052420a000111510100ffffffe250', 'hex'));
            expect(acceptableFrameRanges).toEqual([
                {
                    start: 4,
                    end: 18,
                    length: 14,
                },
            ]);
        });

        it('[H, L, P, H, L, P, C]', () => {
            const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(Buffer.from('52420a000111510100ffffff52420a000111510100ffffffe250', 'hex'));
            expect(acceptableFrameRanges).toEqual([
                {
                    start: 12,
                    end: 26,
                    length: 14,
                },
            ]);
        });

        it('[H, L, P, C, H, L, P, C]', () => {
            const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(Buffer.from('52420a000111510100ffffffe25052420a000111510100ffffffe250', 'hex'));
            expect(acceptableFrameRanges).toEqual([
                {
                    start: 0,
                    end: 14,
                    length: 14,
                },
                {
                    start: 14,
                    end: 28,
                    length: 14,
                },
            ]);
        });

        it('[H, L, P, C, ..., H, L, P, C]', () => {
            const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(Buffer.from('52420a000111510100ffffffe2501234567852420a000111510100ffffffe250', 'hex'));
            expect(acceptableFrameRanges).toEqual([
                {
                    start: 0,
                    end: 14,
                    length: 14,
                },
                {
                    start: 18,
                    end: 32,
                    length: 14,
                },
            ]);
        });

        it('[..., H, L, P, C, ..., H, L, P, C, ...]', () => {
            const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(Buffer.from('12345652420a000111510100ffffffe2501234567852420a000111510100ffffffe250123456', 'hex'));
            expect(acceptableFrameRanges).toEqual([
                {
                    start: 3,
                    end: 17,
                    length: 14,
                },
                {
                    start: 21,
                    end: 35,
                    length: 14,
                },
            ]);
        });

    });

    describe('.checkAllResponsePayloadsReceived(commandPayload, responsePayloads)', () => {

        it('<read ledSettingNormalState test>', () => {
            const received = Utilities.checkAllResponsePayloadsReceived({
                command: 'read',
                address: 'ledSettingNormalState',
                data: {},
            }, [
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
            expect(received).toBe(true);
        });

        it('<read memoryDataLong test>', () => {
            const received = Utilities.checkAllResponsePayloadsReceived({
                command: 'read',
                address: 'memoryDataLong',
                data: {
                    memoryIndexStart: 1,
                    memoryIndexEnd: 2,
                },
            }, [
                {
                    command: 'read',
                    address: 'memoryDataLong',
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
                        vibrationInformation: 0,
                        siValue: 0,
                        pga: 0,
                        seismicIntensity: 0,
                        temperatureFlag: 0,
                        relativeHumidityFlag: 0,
                        ambientLightFlag: 0,
                        barometricPressureFlag: 0,
                        soundNoiseFlag: 0,
                        etvocFlag: 0,
                        eco2Flag: 0,
                        discomfortIndexFlag: 0,
                        heatStrokeFlag: 0,
                        siValueFlag: 0,
                        pgaFlag: 0,
                        seismicIntensityFlag: 0,
                    },
                },
                {
                    command: 'read',
                    address: 'memoryDataLong',
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
                        vibrationInformation: 0,
                        siValue: 0,
                        pga: 0,
                        seismicIntensity: 0,
                        temperatureFlag: 0,
                        relativeHumidityFlag: 0,
                        ambientLightFlag: 0,
                        barometricPressureFlag: 0,
                        soundNoiseFlag: 0,
                        etvocFlag: 0,
                        eco2Flag: 0,
                        discomfortIndexFlag: 0,
                        heatStrokeFlag: 0,
                        siValueFlag: 0,
                        pgaFlag: 0,
                        seismicIntensityFlag: 0,
                    },
                },
            ]);
            expect(received).toBe(true);
        });

        it('<read memoryDataShort test>', () => {
            const received = Utilities.checkAllResponsePayloadsReceived({
                command: 'read',
                address: 'memoryDataShort',
                data: {
                    memoryIndexStart: 1,
                    memoryIndexEnd: 2,
                },
            }, [
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
            expect(received).toBe(true);
        });

    });

});
