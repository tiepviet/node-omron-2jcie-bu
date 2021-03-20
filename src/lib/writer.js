/**
 * node-omron-2jcie-bu/src/lib/writer.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

const stream = require('stream');

const { Utilities } = require('./utilities');

const { Writer } = (() => {

    /** @typedef WriterConstructorOptions @type {import('../../types').WriterConstructorOptions} */
    /** @typedef _Writer @type {import('../../types')._Writer} */
    /** @typedef Writer @type {import('../../types').Writer} */
    /** @typedef WriterConstructor @type {import('../../types').WriterConstructor} */

    /** @type {WriterConstructor} */
    const Writer = (options) => {

        /** @type {WriterConstructorOptions} */
        const _options = options;

        /** @type {_Writer} */
        const _it = {};
        _it.stream = new stream.Transform({
            readableObjectMode: false,
            writableObjectMode: true,
            transform: (chunk, _encoding, callback) => {
                const frameBuffer = Utilities.packCommandPayloadIntoFrameBuffer(chunk);
                _it.stream.push(frameBuffer);
                callback();
            },
        });

        /** @type {Writer} */
        const it = {};
        it.WriterConstructorOptions = () => {
            return _options;
        };
        it._Writer = () => {
            return _it;
        };
        it.input = () => {
            return _it.stream;
        };
        it.output = () => {
            return _it.stream;
        };
        return it;

    };
    return { Writer };

})();

module.exports = { Writer };
