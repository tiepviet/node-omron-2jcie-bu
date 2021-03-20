/**
 * node-omron-2jcie-bu/test/contents.test.js
 * Copyright (C) e53e04ac
 * MIT License
 */

// @ts-nocheck
/* eslint-env mocha */

'use strict';

const expect = require('expect');

const { Contents } = require('../src/lib/contents');

describe('Contents', () => {

    describe('.ContentsConstructorOptions()', () => {

        it('<type test>', () => {
            const _options = Contents.ContentsConstructorOptions();
            expect(_options).toBeInstanceOf(Object);
        });

    });

    describe('._Contents()', () => {

        it('<type test>', () => {
            const _it = Contents._Contents();
            expect(_it).toBeInstanceOf(Object);
        });

    });

    describe('.find(value)', () => {

        it('"raw"', () => {
            const contentType = Contents.find('raw');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"errorCode"', () => {
            const contentType = Contents.find('errorCode');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"temperature"', () => {
            const contentType = Contents.find('temperature');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"relativeHumidity"', () => {
            const contentType = Contents.find('relativeHumidity');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"ambientLight"', () => {
            const contentType = Contents.find('ambientLight');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"barometricPressure"', () => {
            const contentType = Contents.find('barometricPressure');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"soundNoise"', () => {
            const contentType = Contents.find('soundNoise');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"etvoc"', () => {
            const contentType = Contents.find('etvoc');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"eco2"', () => {
            const contentType = Contents.find('eco2');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"discomfortIndex"', () => {
            const contentType = Contents.find('discomfortIndex');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"heatStroke"', () => {
            const contentType = Contents.find('heatStroke');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"acceleration"', () => {
            const contentType = Contents.find('acceleration');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"siValue"', () => {
            const contentType = Contents.find('siValue');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"pga"', () => {
            const contentType = Contents.find('pga');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"seismicIntensity"', () => {
            const contentType = Contents.find('seismicIntensity');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"siValueCalculationAxis"', () => {
            const contentType = Contents.find('siValueCalculationAxis');
            expect(contentType).toBeInstanceOf(Object);
        });

        it('"vibrationInformation"', () => {
            const contentType = Contents.find('vibrationInformation');
            expect(contentType).toBeInstanceOf(Object);
        });

    });

    describe('ContentType', () => {

        describe('"raw"', () => {
            const contentType = Contents.find('raw');
            it('.name', () => {
                expect(contentType.name).toBe('raw');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(null)).toEqual(null);
            });
        });

        describe('"errorCode"', () => {
            const contentType = Contents.find('errorCode');
            it('.name', () => {
                expect(contentType.name).toBe('errorCode');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0x01)).toEqual({ raw: 0x01, crcError: true, });
                expect(contentType.decode(0x02)).toEqual({ raw: 0x02, commandError: true, });
                expect(contentType.decode(0x03)).toEqual({ raw: 0x03, addressError: true, });
                expect(contentType.decode(0x04)).toEqual({ raw: 0x04, lengthError: true, });
                expect(contentType.decode(0x05)).toEqual({ raw: 0x05, dataError: true, });
                expect(contentType.decode(0x06)).toEqual({ raw: 0x06, busy: true, });
            });
        });

        describe('"temperature"', () => {
            const contentType = Contents.find('temperature');
            it('.name', () => {
                expect(contentType.name).toBe('temperature');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0)).toEqual({ raw: 0, value: 0, unit: 'degC', });
            });
        });

        describe('"relativeHumidity"', () => {
            const contentType = Contents.find('relativeHumidity');
            it('.name', () => {
                expect(contentType.name).toBe('relativeHumidity');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0)).toEqual({ raw: 0, value: 0, unit: '%RH', });
            });
        });

        describe('"ambientLight"', () => {
            const contentType = Contents.find('ambientLight');
            it('.name', () => {
                expect(contentType.name).toBe('ambientLight');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0)).toEqual({ raw: 0, value: 0, unit: 'lx', });
            });
        });

        describe('"barometricPressure"', () => {
            const contentType = Contents.find('barometricPressure');
            it('.name', () => {
                expect(contentType.name).toBe('barometricPressure');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0)).toEqual({ raw: 0, value: 0, unit: 'hPa', });
            });
        });

        describe('"soundNoise"', () => {
            const contentType = Contents.find('soundNoise');
            it('.name', () => {
                expect(contentType.name).toBe('soundNoise');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0)).toEqual({ raw: 0, value: 0, unit: 'dB', });
            });
        });

        describe('"etvoc"', () => {
            const contentType = Contents.find('etvoc');
            it('.name', () => {
                expect(contentType.name).toBe('etvoc');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0)).toEqual({ raw: 0, value: 0, unit: 'ppb', });
            });
        });

        describe('"eco2"', () => {
            const contentType = Contents.find('eco2');
            it('.name', () => {
                expect(contentType.name).toBe('eco2');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0)).toEqual({ raw: 0, value: 0, unit: 'ppm', });
            });
        });

        describe('"discomfortIndex"', () => {
            const contentType = Contents.find('discomfortIndex');
            it('.name', () => {
                expect(contentType.name).toBe('discomfortIndex');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0)).toEqual({ raw: 0, value: 0, unit: null, });
            });
        });

        describe('"heatStroke"', () => {
            const contentType = Contents.find('heatStroke');
            it('.name', () => {
                expect(contentType.name).toBe('heatStroke');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0)).toEqual({ raw: 0, value: 0, unit: 'degC', });
            });
        });

        describe('"acceleration"', () => {
            const contentType = Contents.find('acceleration');
            it('.name', () => {
                expect(contentType.name).toBe('acceleration');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0)).toEqual({ raw: 0, value: 0, unit: 'gal', });
            });
        });

        describe('"siValue"', () => {
            const contentType = Contents.find('siValue');
            it('.name', () => {
                expect(contentType.name).toBe('siValue');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0)).toEqual({ raw: 0, value: 0, unit: 'kine', });
            });
        });

        describe('"pga"', () => {
            const contentType = Contents.find('pga');
            it('.name', () => {
                expect(contentType.name).toBe('pga');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0)).toEqual({ raw: 0, value: 0, unit: 'gal', });
            });
        });

        describe('"seismicIntensity"', () => {
            const contentType = Contents.find('seismicIntensity');
            it('.name', () => {
                expect(contentType.name).toBe('seismicIntensity');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0)).toEqual({ raw: 0, value: 0, unit: null, });
            });
        });

        describe('"siValueCalculationAxis"', () => {
            const contentType = Contents.find('siValueCalculationAxis');
            it('.name', () => {
                expect(contentType.name).toBe('siValueCalculationAxis');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0)).toEqual({ raw: 0, value: 'yz-axis', });
                expect(contentType.decode(1)).toEqual({ raw: 1, value: 'xz-axis', });
                expect(contentType.decode(2)).toEqual({ raw: 2, value: 'xy-axis', });
            });
        });

        describe('"vibrationInformation"', () => {
            const contentType = Contents.find('vibrationInformation');
            it('.name', () => {
                expect(contentType.name).toBe('vibrationInformation');
            });
            it('.encode(value)', () => {
                expect(contentType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(contentType.decode(0)).toEqual({ raw: 0, value: 'none', });
                expect(contentType.decode(1)).toEqual({ raw: 1, value: 'during vibration', });
                expect(contentType.decode(2)).toEqual({ raw: 2, value: 'during earthquake', });
            });
        });

    });

});
