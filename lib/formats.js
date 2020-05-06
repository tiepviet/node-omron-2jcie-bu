/**
 * node-omron-2jcie-bu/lib/formats.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

require('./annotations');

/**
 * @public
 * @type {Formats}
 */
const Formats = (() => {

    /**s
     * @private
     */
    const privateScope = {};

    /**
     * @private
     * @type {FormatTypeArray}
     */
    privateScope.formatTypeArray = [
        {
            name: 'SInt16',
            read: (buffer, begin, _end) => {
                return buffer.readInt16LE(begin);
            },
            write: (buffer, begin, _end, value) => {
                return buffer.writeInt16LE(value, begin);
            },
            primitive: 'number',
        },
        {
            name: 'SInt32',
            read: (buffer, begin, _end) => {
                return buffer.readInt32LE(begin);
            },
            write: (buffer, begin, _end, value) => {
                return buffer.writeInt32LE(value, begin);
            },
            primitive: 'number',
        },
        {
            name: 'UInt8',
            read: (buffer, begin, _end) => {
                return buffer.readUInt8(begin);
            },
            write: (buffer, begin, _end, value) => {
                return buffer.writeUInt8(value, begin);
            },
            primitive: 'number',
        },
        {
            name: 'UInt16',
            read: (buffer, begin, _end) => {
                return buffer.readUInt16LE(begin);
            },
            write: (buffer, begin, _end, value) => {
                return buffer.writeUInt16LE(value, begin);
            },
            primitive: 'number',
        },
        {
            name: 'UInt32',
            read: (buffer, begin, _end) => {
                return buffer.readUInt32LE(begin);
            },
            write: (buffer, begin, _end, value) => {
                return buffer.writeUInt32LE(value, begin);
            },
            primitive: 'number',
        },
        {
            name: 'UInt64',
            read: (buffer, begin, _end) => {
                return buffer.readBigUInt64LE(begin);
            },
            write: (buffer, begin, _end, value) => {
                return buffer.writeBigUInt64LE(value, begin);
            },
            primitive: 'bigint',
        },
        {
            name: 'Utf8s',
            read: (buffer, begin, end) => {
                return buffer.slice(begin, end + 1).toString('utf8');
            },
            write: (buffer, begin, end, value) => {
                return buffer.write(value, begin, end - begin + 1, 'utf8');
            },
            primitive: 'string',
        },
    ];

    /**
     * @private
     * @type {FormatTypeMap}
     */
    privateScope.formatTypeMap = new Map();
    for (const formatType of privateScope.formatTypeArray) {
        privateScope.formatTypeMap.set(formatType.name, formatType);
    }

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
     * @param {FormatName} value
     * @return {FormatType}
     */
    publicScope.find = (value) => {
        return privateScope.formatTypeMap.get(value);
    };

    return publicScope;

})();

/**
 * @public
 */
module.exports = Formats;
