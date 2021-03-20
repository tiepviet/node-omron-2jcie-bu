/**
 * node-omron-2jcie-bu/src/lib/formats.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

const { Formats } = (() => {

    /** @typedef FormatsConstructorOptions @type {import('../../types').FormatsConstructorOptions} */
    /** @typedef _Formats @type {import('../../types')._Formats} */
    /** @typedef Formats @type {import('../../types').Formats} */
    /** @typedef FormatsConstructor @type {import('../../types').FormatsConstructor} */

    /** @type {FormatsConstructor} */
    const Formats = (options) => {

        /** @type {FormatsConstructorOptions} */
        const _options = options;

        /** @type {_Formats} */
        const _it = {};
        _it.formatTypeArray = [
            {
                name: 'SInt16',
                read: (buffer, begin, _end) => {
                    return buffer.readInt16LE(begin);
                },
                write: (buffer, begin, _end, value) => {
                    /* istanbul ignore next */
                    if (typeof value === 'string' || typeof value === 'bigint') {
                        throw new Error();
                    }
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
                    /* istanbul ignore next */
                    if (typeof value === 'string' || typeof value === 'bigint') {
                        throw new Error();
                    }
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
                    /* istanbul ignore next */
                    if (typeof value === 'string' || typeof value === 'bigint') {
                        throw new Error();
                    }
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
                    /* istanbul ignore next */
                    if (typeof value === 'string' || typeof value === 'bigint') {
                        throw new Error();
                    }
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
                    /* istanbul ignore next */
                    if (typeof value === 'string' || typeof value === 'bigint') {
                        throw new Error();
                    }
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
                    /* istanbul ignore next */
                    if (typeof value === 'string' || typeof value === 'number') {
                        throw new Error();
                    }
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
                    /* istanbul ignore next */
                    if (typeof value === 'number' || typeof value === 'bigint') {
                        throw new Error();
                    }
                    return buffer.write(value, begin, end - begin + 1, 'utf8');
                },
                primitive: 'string',
            },
        ];
        _it.formatTypeMap = new Map();
        for (const formatType of _it.formatTypeArray) {
            _it.formatTypeMap.set(formatType.name, formatType);
        }

        /** @type {Formats} */
        const it = {};
        it.FormatsConstructorOptions = () => {
            return _options;
        };
        it._Formats = () => {
            return _it;
        };
        it.find = (value) => {
            return _it.formatTypeMap.get(value);
        };
        return it;

    };
    return { Formats };

})();

module.exports = { Formats: Formats({}) };
