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

    });

    describe('FormatType', () => {

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

    });

});
