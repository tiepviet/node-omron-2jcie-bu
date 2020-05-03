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
        writableObjectMode: false,
        readableObjectMode: true,
        transform: (chunk, _encoding, callback) => {
            privateScope.buffer = Buffer.concat([privateScope.buffer, chunk]);
            const acceptableFrames = Utilities.readAcceptableFramesFromBuffer(privateScope.buffer);
            if (acceptableFrames.length > 0) {
                const lastAcceptableFrame = acceptableFrames.slice(-1)[0];
                privateScope.buffer = privateScope.buffer.slice(lastAcceptableFrame.frameOffset + lastAcceptableFrame.frameLength);
                for (const acceptableFrame of acceptableFrames) {
                    const responsePayload = Utilities.unpackResponsePayloadFromFrameBuffer(acceptableFrame.frameBuffer);
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
        privateScope.buffer = Buffer.alloc(0);
    };

    return publicScope;

};

/**
 * @public
 */
module.exports = Reader;
