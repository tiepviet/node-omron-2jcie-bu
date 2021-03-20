/**
 * node-omron-2jcie-bu/test/channel.test.js
 * Copyright (C) e53e04ac
 * MIT License
 */

// @ts-nocheck
/* eslint-env mocha */

'use strict';

const expect = require('expect');

const stream = require('stream');

const { ChannelVirtual } = require('./channel-virtual');

const { Channel } = require('../src/lib/channel');

describe('Channel', () => {

    const channel = Channel({
        path: ChannelVirtual,
    });

    describe('.ChannelConstructorOptions()', () => {

        it('<empty>', () => {
            const _options = channel.ChannelConstructorOptions();
            expect(_options).toBeInstanceOf(Object);
        });

    });

    describe('._Channel()', () => {

        it('<empty>', () => {
            const _it = channel._Channel();
            expect(_it).toBeInstanceOf(Object);
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
