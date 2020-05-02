/**
 * node-omron-2jcie-bu/lib/writer.js
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
 * @return {Writer}
 */
const Writer = () => {

    /**
     * @private
     */
    const privateScope = {};

    /**
     * @private
     * @type {Transform}
     */
    privateScope.stream = new Transform({
        writableObjectMode: true,
        readableObjectMode: false,
        transform: (chunk, encoding, callback) => {
            const frameBuffer = Utilities.packCommandPayloadInFrameBuffer(chunk);
            privateScope.stream.push(frameBuffer);
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

    return publicScope;

};

/**
 * @public
 */
module.exports = Writer;
