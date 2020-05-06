/* eslint-env mocha */

'use strict';

const expect = require('expect');

const Formats = require('../lib/formats');

describe('Formats', () => {

    describe('.privateScope()', () => {

        it('<type test>', () => {
            const privateScope = Formats.privateScope();
            expect(privateScope).toBeInstanceOf(Object);
        });

    });

    describe('.find(value)', () => {

        it('"SInt16"', () => {
            const formatType = Formats.find('SInt16');
            expect(formatType).toBeInstanceOf(Object);
        });

        it('"SInt32"', () => {
            const formatType = Formats.find('SInt32');
            expect(formatType).toBeInstanceOf(Object);
        });

        it('"UInt8"', () => {
            const formatType = Formats.find('UInt8');
            expect(formatType).toBeInstanceOf(Object);
        });

        it('"UInt16"', () => {
            const formatType = Formats.find('UInt16');
            expect(formatType).toBeInstanceOf(Object);
        });

        it('"UInt32"', () => {
            const formatType = Formats.find('UInt32');
            expect(formatType).toBeInstanceOf(Object);
        });

        it('"UInt64"', () => {
            const formatType = Formats.find('UInt64');
            expect(formatType).toBeInstanceOf(Object);
        });

        it('"Utf8s"', () => {
            const formatType = Formats.find('Utf8s');
            expect(formatType).toBeInstanceOf(Object);
        });

        it('<empty>', () => {
            const formatType = Formats.find();
            expect(formatType).toBe(undefined);
        });

        it('""', () => {
            const formatType = Formats.find('');
            expect(formatType).toBe(undefined);
        });

    });

    describe('FormatType', () => {

        describe('"SInt16"', () => {
            const formatType = Formats.find('SInt16');
            it('.name', () => {
                expect(formatType.name).toBe('SInt16');
            });
            it('.primitive', () => {
                expect(formatType.primitive).toBe('number');
            });
            it('.read(buffer, begin, end)', () => {
                const buffer = Buffer.from('0123', 'hex');
                expect(formatType.read(buffer, 0, 1)).toBe(0x2301);
            });
            it('.write(buffer, begin, end, value)', () => {
                const buffer = Buffer.from('0000', 'hex');
                formatType.write(buffer, 0, 1, 0x2301);
                expect(buffer).toEqual(Buffer.from('0123', 'hex'));
            });
        });

        describe('"SInt32"', () => {
            const formatType = Formats.find('SInt32');
            it('.name', () => {
                expect(formatType.name).toBe('SInt32');
            });
            it('.primitive', () => {
                expect(formatType.primitive).toBe('number');
            });
            it('.read(buffer, begin, end)', () => {
                const buffer = Buffer.from('01234567', 'hex');
                expect(formatType.read(buffer, 0, 3)).toBe(0x67452301);
            });
            it('.write(buffer, begin, end, value)', () => {
                const buffer = Buffer.from('00000000', 'hex');
                formatType.write(buffer, 0, 3, 0x67452301);
                expect(buffer).toEqual(Buffer.from('01234567', 'hex'));
            });
        });

        describe('"UInt8"', () => {
            const formatType = Formats.find('UInt8');
            it('.name', () => {
                expect(formatType.name).toBe('UInt8');
            });
            it('.primitive', () => {
                expect(formatType.primitive).toBe('number');
            });
            it('.read(buffer, begin, end)', () => {
                const buffer = Buffer.from('01', 'hex');
                expect(formatType.read(buffer, 0, 0)).toBe(0x01);
            });
            it('.write(buffer, begin, end, value)', () => {
                const buffer = Buffer.from('00', 'hex');
                formatType.write(buffer, 0, 0, 0x01);
                expect(buffer).toEqual(Buffer.from('01', 'hex'));
            });
        });

        describe('"UInt16"', () => {
            const formatType = Formats.find('UInt16');
            it('.name', () => {
                expect(formatType.name).toBe('UInt16');
            });
            it('.primitive', () => {
                expect(formatType.primitive).toBe('number');
            });
            it('.read(buffer, begin, end)', () => {
                const buffer = Buffer.from('0123', 'hex');
                expect(formatType.read(buffer, 0, 1)).toBe(0x2301);
            });
            it('.write(buffer, begin, end, value)', () => {
                const buffer = Buffer.from('0000', 'hex');
                formatType.write(buffer, 0, 1, 0x2301);
                expect(buffer).toEqual(Buffer.from('0123', 'hex'));
            });
        });

        describe('"UInt32"', () => {
            const formatType = Formats.find('UInt32');
            it('.name', () => {
                expect(formatType.name).toBe('UInt32');
            });
            it('.primitive', () => {
                expect(formatType.primitive).toBe('number');
            });
            it('.read(buffer, begin, end)', () => {
                const buffer = Buffer.from('01234567', 'hex');
                expect(formatType.read(buffer, 0, 3)).toBe(0x67452301);
            });
            it('.write(buffer, begin, end, value)', () => {
                const buffer = Buffer.from('00000000', 'hex');
                formatType.write(buffer, 0, 3, 0x67452301);
                expect(buffer).toEqual(Buffer.from('01234567', 'hex'));
            });
        });

        describe('"UInt64"', () => {
            const formatType = Formats.find('UInt64');
            it('.name', () => {
                expect(formatType.name).toBe('UInt64');
            });
            it('.primitive', () => {
                expect(formatType.primitive).toBe('bigint');
            });
            it('.read(buffer, begin, end)', () => {
                const buffer = Buffer.from('0123456789abcdef', 'hex');
                expect(formatType.read(buffer, 0, 7)).toBe(BigInt('0xefcdab8967452301'));
            });
            it('.write(buffer, begin, end, value)', () => {
                const buffer = Buffer.from('0000000000000000', 'hex');
                formatType.write(buffer, 0, 7, BigInt('0xefcdab8967452301'));
                expect(buffer).toEqual(Buffer.from('0123456789abcdef', 'hex'));
            });
        });

        describe('"Utf8s"', () => {
            const formatType = Formats.find('Utf8s');
            it('.name', () => {
                expect(formatType.name).toBe('Utf8s');
            });
            it('.primitive', () => {
                expect(formatType.primitive).toBe('string');
            });
            it('.read(buffer, begin, end)', () => {
                const buffer = Buffer.from('abcdefghijklmnop');
                expect(formatType.read(buffer, 0, 15)).toBe('abcdefghijklmnop');
            });
            it('.write(buffer, begin, end, value)', () => {
                const buffer = Buffer.from('0000000000000000');
                formatType.write(buffer, 0, 15, 'abcdefghijklmnop');
                expect(buffer).toEqual(Buffer.from('abcdefghijklmnop'));
            });
        });

    });

});
