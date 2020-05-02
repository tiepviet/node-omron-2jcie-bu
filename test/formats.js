'use strict';

const expect = require('expect');

const Formats = require('../lib/formats');

describe('Formats', () => {

    describe('.privateScope()', () => {

        it('<empty>', () => {
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
                const buffer = Buffer.from([0x01, 0x23]);
                expect(formatType.read(buffer, 0, 1)).toBe(0x2301);
            });
            it('.write(buffer, begin, end, value)', () => {
                const bufferA = Buffer.from([0x00, 0x00]);
                const bufferB = Buffer.from([0x01, 0x23]);
                formatType.write(bufferA, 0, 1, 0x2301);
                expect(bufferA.compare(bufferB)).toBe(0);
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
                const buffer = Buffer.from([0x01, 0x23, 0x45, 0x67]);
                expect(formatType.read(buffer, 0, 3)).toBe(0x67452301);
            });
            it('.write(buffer, begin, end, value)', () => {
                const bufferA = Buffer.from([0x00, 0x00, 0x00, 0x00]);
                const bufferB = Buffer.from([0x01, 0x23, 0x45, 0x67]);
                formatType.write(bufferA, 0, 3, 0x67452301);
                expect(bufferA.compare(bufferB)).toBe(0);
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
                const buffer = Buffer.from([0x01]);
                expect(formatType.read(buffer, 0, 0)).toBe(0x01);
            });
            it('.write(buffer, begin, end, value)', () => {
                const bufferA = Buffer.from([0x00]);
                const bufferB = Buffer.from([0x01]);
                formatType.write(bufferA, 0, 0, 0x01);
                expect(bufferA.compare(bufferB)).toBe(0);
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
                const buffer = Buffer.from([0x01, 0x23]);
                expect(formatType.read(buffer, 0, 1)).toBe(0x2301);
            });
            it('.write(buffer, begin, end, value)', () => {
                const bufferA = Buffer.from([0x00, 0x00]);
                const bufferB = Buffer.from([0x01, 0x23]);
                formatType.write(bufferA, 0, 1, 0x2301);
                expect(bufferA.compare(bufferB)).toBe(0);
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
                const buffer = Buffer.from([0x01, 0x23, 0x45, 0x67]);
                expect(formatType.read(buffer, 0, 3)).toBe(0x67452301);
            });
            it('.write(buffer, begin, end, value)', () => {
                const bufferA = Buffer.from([0x00, 0x00, 0x00, 0x00]);
                const bufferB = Buffer.from([0x01, 0x23, 0x45, 0x67]);
                formatType.write(bufferA, 0, 3, 0x67452301);
                expect(bufferA.compare(bufferB)).toBe(0);
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
                const buffer = Buffer.from([0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef]);
                expect(formatType.read(buffer, 0, 7)).toBe(BigInt('0xefcdab8967452301'));
            });
            it('.write(buffer, begin, end, value)', () => {
                const bufferA = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
                const bufferB = Buffer.from([0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef]);
                formatType.write(bufferA, 0, 7, BigInt('0xefcdab8967452301'));
                expect(bufferA.compare(bufferB)).toBe(0);
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
                const buffer = Buffer.from('0123456789abcdef');
                expect(formatType.read(buffer, 0, 15)).toBe('0123456789abcdef');
            });
            it('.write(buffer, begin, end, value)', () => {
                const bufferA = Buffer.from('0000000000000000');
                const bufferB = Buffer.from('0123456789abcdef');
                formatType.write(bufferA, 0, 15, ('0123456789abcdef'));
                expect(bufferA.compare(bufferB)).toBe(0);
            });
        });

    });

});
