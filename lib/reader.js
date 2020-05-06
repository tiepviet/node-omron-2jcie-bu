/**
 * node-omron-2jcie-bu/lib/reader.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

require('./annotations');

/**
 * @private
 */
const Transform = require('stream').Transform;

/**
 * @private
 */
const Utilities = require('./utilities');

/**
 * @public
 * @function
 * @return {Reader}
 */
const Reader = () => {

    /**
     * @private
     */
    const privateScope = {};

    /**
     * @private
     * @type {Buffer}
     */
    privateScope.buffer = Buffer.alloc(0);

    /**
     * @private
     * @type {Transform}
     */
    privateScope.stream = new Transform({
        readableObjectMode: true,
        writableObjectMode: false,
        transform: (chunk, _encoding, callback) => {
            privateScope.buffer = Buffer.concat([privateScope.buffer, chunk]);
            const acceptableFrameRanges = Utilities.findAcceptableFrameRangesInBuffer(privateScope.buffer);
            if (acceptableFrameRanges.length > 0) {
                const lastAcceptableFrameRange = acceptableFrameRanges.slice(-1)[0];
                const buffer = privateScope.buffer.slice(0, lastAcceptableFrameRange.end);
                privateScope.buffer = privateScope.buffer.slice(lastAcceptableFrameRange.end);
                for (const acceptableFrameRange of acceptableFrameRanges) {
                    const frameBuffer = buffer.slice(acceptableFrameRange.start, acceptableFrameRange.end);
                    const responsePayload = Utilities.unpackResponsePayloadFromFrameBuffer(frameBuffer);
                    privateScope.stream.push(responsePayload);
                }
            }
            callback();
        },
    });

    /**
     * @public
     */
    const publicScope = {};

    /**
     * @private
     * @function
     * @return {any}
     */
    publicScope.privateScope = () => {
        return privateScope;
    };

    /**
     * @public
     * @function
     * @return {Stream}
     */
    publicScope.input = () => {
        return privateScope.stream;
    };

    /**
     * @public
     * @function
     * @return {Stream}
     */
    publicScope.output = () => {
        return privateScope.stream;
    };

    return publicScope;

};

/**
 * @public
 */
module.exports = Reader;
