/* eslint-env mocha */

'use strict';

const expect = require('expect');

const Commands = require('../lib/commands');

describe('Commands', () => {

    describe('.privateScope()', () => {

        it('<type test>', () => {
            const privateScope = Commands.privateScope();
            expect(privateScope).toBeInstanceOf(Object);
        });

    });

    describe('.find(value)', () => {

        it('"read"', () => {
            const commandType = Commands.find('read');
            expect(commandType).toBeInstanceOf(Object);
            expect(commandType).toBe(Commands.find(0x01));
        });

        it('0x01', () => {
            const commandType = Commands.find(0x01);
            expect(commandType).toBeInstanceOf(Object);
            expect(commandType).toBe(Commands.find('read'));
        });

        it('"write"', () => {
            const commandType = Commands.find('write');
            expect(commandType).toBeInstanceOf(Object);
            expect(commandType).toBe(Commands.find(0x02));
        });

        it('0x02', () => {
            const commandType = Commands.find(0x02);
            expect(commandType).toBeInstanceOf(Object);
            expect(commandType).toBe(Commands.find('write'));
        });

        it('"readError"', () => {
            const commandType = Commands.find('readError');
            expect(commandType).toBeInstanceOf(Object);
            expect(commandType).toBe(Commands.find(0x81));
        });

        it('0x81', () => {
            const commandType = Commands.find(0x81);
            expect(commandType).toBeInstanceOf(Object);
            expect(commandType).toBe(Commands.find('readError'));
        });

        it('"writeError"', () => {
            const commandType = Commands.find('writeError');
            expect(commandType).toBeInstanceOf(Object);
            expect(commandType).toBe(Commands.find(0x82));
        });

        it('0x82', () => {
            const commandType = Commands.find(0x82);
            expect(commandType).toBeInstanceOf(Object);
            expect(commandType).toBe(Commands.find('writeError'));
        });

        it('"unknown"', () => {
            const commandType = Commands.find('unknown');
            expect(commandType).toBeInstanceOf(Object);
            expect(Commands.find('unknown')).toBe(Commands.find(0xFF));
        });

        it('0xFF', () => {
            const commandType = Commands.find(0xFF);
            expect(commandType).toBeInstanceOf(Object);
            expect(Commands.find(0xFF)).toBe(Commands.find('unknown'));
        });

        it('<empty>', () => {
            expect(Commands.find()).toBe(undefined);
        });

        it('""', () => {
            expect(Commands.find('')).toBe(undefined);
        });

        it('0x00', () => {
            expect(Commands.find(0x00)).toBe(undefined);
        });

    });

    describe('CommandType', () => {

        describe('"read"', () => {
            const commandType = Commands.find('read');
            it('.name', () => {
                expect(commandType.name).toBe('read');
            });
            it('.value', () => {
                expect(commandType.value).toBe(0x01);
            });
        });

        describe('"write"', () => {
            const commandType = Commands.find('write');
            it('.name', () => {
                expect(commandType.name).toBe('write');
            });
            it('.value', () => {
                expect(commandType.value).toBe(0x02);
            });
        });

        describe('"readError"', () => {
            const commandType = Commands.find('readError');
            it('.name', () => {
                expect(commandType.name).toBe('readError');
            });
            it('.value', () => {
                expect(commandType.value).toBe(0x81);
            });
        });

        describe('"writeError"', () => {
            const commandType = Commands.find('writeError');
            it('.name', () => {
                expect(commandType.name).toBe('writeError');
            });
            it('.value', () => {
                expect(commandType.value).toBe(0x82);
            });
        });

        describe('"unknown"', () => {
            const commandType = Commands.find('unknown');
            it('.name', () => {
                expect(commandType.name).toBe('unknown');
            });
            it('.value', () => {
                expect(commandType.value).toBe(0xFF);
            });
        });

    });

});
