/**
 * node-omron-2jcie-bu/src/lib/reader.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

const stream = require('stream');

const { Utilities } = require('./utilities');

const { Reader } = (() => {

    /** @typedef ReaderConstructorOptions @type {import('../../types').ReaderConstructorOptions} */
    /** @typedef _Reader @type {import('../../types')._Reader} */
    /** @typedef Reader @type {import('../../types').Reader} */
    /** @typedef ReaderConstructor @type {import('../../types').ReaderConstructor} */

    /** @type {ReaderConstructor} */
    const Reader = (options) => {

        /** @type {ReaderConstructorOptions} */
        const _options = options;

        /** @type {_Reader} */
        const _it = {};
        _it.buffer = Buffer.alloc(0);
        _it.stream = new stream.Transform({
            readableObjectMode: true,
            writableObjectMode: false,
            transform: (chunk, _encoding, callback) => {
                _it.buffer = Buffer.concat([_it.buffer, chunk]);
                const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(_it.buffer);
                if (acceptableFrameRanges.length > 0) {
                    const lastAcceptableFrameRange = acceptableFrameRanges.slice(-1)[0];
                    const buffer = _it.buffer.slice(0, lastAcceptableFrameRange.end);
                    _it.buffer = _it.buffer.slice(lastAcceptableFrameRange.end);
                    for (const acceptableFrameRange of acceptableFrameRanges) {
                        const frameBuffer = buffer.slice(acceptableFrameRange.start, acceptableFrameRange.end);
                        const responsePayload = Utilities.unpackResponsePayloadFromFrameBuffer(frameBuffer);
                        _it.stream.push(responsePayload);
                    }
                }
                callback();
            },
        });

        /** @type {Reader} */
        const it = {};
        it.ReaderConstructorOptions = () => {
            return _options;
        };
        it._Reader = () => {
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
    return { Reader };

})();

module.exports = { Reader };
