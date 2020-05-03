/* eslint-env mocha */

'use strict';

const expect = require('expect');

const stream = require('stream');

const ChannelVirtual = require('./channel-virtual');

const Channel = require('../lib/channel');

describe('Channel', () => {

    const channel = Channel({
        path: ChannelVirtual,
    });

    describe('.privateScope()', () => {

        it('<empty>', () => {
            const privateScope = channel.privateScope();
            expect(privateScope).toBeInstanceOf(Object);
        });

    });

    describe('.input()', () => {

        it('<empty>', () => {
            const input = channel.input();
            expect(input).toBeInstanceOf(stream.Stream);
        });

    });

    describe('.output()', () => {

        it('<empty>', () => {
            const output = channel.output();
            expect(output).toBeInstanceOf(stream.Stream);
        });

    });

    describe('.open()', () => {

        it('<empty>', async () => {
            {
                const { error } = await channel.open().then((value) => ({ value }), (error) => ({ error }));
                expect(error).toBe(undefined);
            }
            {
                const { error } = await channel.open().then((value) => ({ value }), (error) => ({ error }));
                expect(error).toBe(undefined);
            }
        });

    });

    describe('.close()', () => {

        it('<empty>', async () => {
            {
                const { error } = await channel.close().then((value) => ({ value }), (error) => ({ error }));
                expect(error).toBe(undefined);
            }
            {
                const { error } = await channel.close().then((value) => ({ value }), (error) => ({ error }));
                expect(error).toBe(undefined);
            }
        });

    });

});
