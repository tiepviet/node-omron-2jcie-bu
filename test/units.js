/* eslint-env mocha */

'use strict';

const expect = require('expect');

const Units = require('../lib/units');

describe('Units', () => {

    describe('.privateScope()', () => {

        it('<empty>', () => {
            const privateScope = Units.privateScope();
            expect(privateScope).toBeInstanceOf(Object);
        });

    });

    describe('.find(value)', () => {

        it('"raw"', () => {
            const unitType = Units.find('raw');
            expect(unitType).toBeInstanceOf(Object);
        });

        it('"errorCode"', () => {
            const unitType = Units.find('errorCode');
            expect(unitType).toBeInstanceOf(Object);
        });

    });

    describe('UnitType', () => {

        describe('"raw"', () => {
            const unitType = Units.find('raw');
            it('.name', () => {
                expect(unitType.name).toBe('raw');
            });
            it('.encode(value)', () => {
                expect(unitType.encode(0x1234)).toBe(0x1234);
            });
            it('.decode(value)', () => {
                expect(unitType.decode(0x1234)).toBe(0x1234);
            });
        });

        describe('"errorCode"', () => {
            const unitType = Units.find('errorCode');
            it('.name', () => {
                expect(unitType.name).toBe('errorCode');
            });
            it('.encode(value)', () => {
                expect(unitType.encode(null)).toEqual(null);
            });
            it('.decode(value)', () => {
                expect(unitType.decode(0x01)).toEqual({
                    _rawValue: 0x01,
                    crcError: true,
                    commandError: false,
                    addressError: false,
                    lengthError: false,
                    dataError: false,
                    busy: false,
                });
                expect(unitType.decode(0x02)).toEqual({
                    _rawValue: 0x02,
                    crcError: false,
                    commandError: true,
                    addressError: false,
                    lengthError: false,
                    dataError: false,
                    busy: false,
                });
                expect(unitType.decode(0x03)).toEqual({
                    _rawValue: 0x03,
                    crcError: false,
                    commandError: false,
                    addressError: true,
                    lengthError: false,
                    dataError: false,
                    busy: false,
                });
                expect(unitType.decode(0x04)).toEqual({
                    _rawValue: 0x04,
                    crcError: false,
                    commandError: false,
                    addressError: false,
                    lengthError: true,
                    dataError: false,
                    busy: false,
                });
                expect(unitType.decode(0x05)).toEqual({
                    _rawValue: 0x05,
                    crcError: false,
                    commandError: false,
                    addressError: false,
                    lengthError: false,
                    dataError: true,
                    busy: false,
                });
                expect(unitType.decode(0x06)).toEqual({
                    _rawValue: 0x06,
                    crcError: false,
                    commandError: false,
                    addressError: false,
                    lengthError: false,
                    dataError: false,
                    busy: true,
                });
            });
        });

    });

});
