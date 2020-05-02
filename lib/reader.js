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
     * @type {{
     *   length: number;
     * }}
     */
    privateScope.frame = null;

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
        writableObjectMode: false,
        readableObjectMode: true,
        transform: (chunk, encoding, callback) => {
            privateScope.buffer = Buffer.concat([privateScope.buffer, chunk]);
            while (true) {
                if (privateScope.frame == null) {
                    if (privateScope.buffer.length < 2) {
                        break;
                    }
                    const headerPosition = privateScope.buffer.indexOf(Utilities.frameHeaderBuffer);
                    if (headerPosition == -1) {
                        break;
                    }
                    privateScope.buffer = privateScope.buffer.slice(headerPosition);
                    privateScope.frame = {
                        length: null
                    };
                }
                if (privateScope.frame.length == null) {
                    if (privateScope.buffer.length < 4) {
                        break;
                    }
                    privateScope.frame.length = privateScope.buffer.readUInt16LE(2);
                }
                if (privateScope.buffer.length < 4 + privateScope.frame.length) {
                    break;
                }
                const frameBuffer = privateScope.buffer.slice(0, 4 + privateScope.frame.length);
                const responsePayload = Utilities.unpackResponsePayloadFromFrameBuffer(frameBuffer);
                if (responsePayload == null) {
                    privateScope.buffer = privateScope.buffer.slice(2);
                    privateScope.frame = null;
                } else {
                    privateScope.buffer = privateScope.buffer.slice(4 + privateScope.frame.length);
                    privateScope.frame = null;
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

    /**
     * @public
     * @function
     * @return {void}
     */
    publicScope.reset = () => {
        privateScope.frame = null;
        privateScope.buffer = Buffer.alloc(0);
    };

    return publicScope;

};

/**
 * @public
 */
module.exports = Reader;
