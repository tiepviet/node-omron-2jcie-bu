/**
 * node-omron-2jcie-bu/src/lib/contents.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

const { Contents } = (() => {

    /** @typedef ContentsConstructorOptions @type {import('../../types').ContentsConstructorOptions} */
    /** @typedef _Contents @type {import('../../types')._Contents} */
    /** @typedef Contents @type {import('../../types').Contents} */
    /** @typedef ContentsConstructor @type {import('../../types').ContentsConstructor} */

    /** @type {ContentsConstructor} */
    const Contents = (options) => {

        /** @type {ContentsConstructorOptions} */
        const _options = options;

        /** @type {_Contents} */
        const _it = {};
        _it.contentTypeArray = [
            {
                name: 'raw',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    return value;
                },
            },
            {
                name: 'errorCode',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    switch (value) {
                        case 0x01: {
                            return { raw: value, crcError: true, };
                        }
                        case 0x02: {
                            return { raw: value, commandError: true, };
                        }
                        case 0x03: {
                            return { raw: value, addressError: true, };
                        }
                        case 0x04: {
                            return { raw: value, lengthError: true, };
                        }
                        case 0x05: {
                            return { raw: value, dataError: true, };
                        }
                        case 0x06: {
                            return { raw: value, busy: true, };
                        }
                    }
                    return {
                        raw: value,
                    };
                },
            },
            {
                name: 'temperature',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    return { raw: value, value: (value * 0.01), unit: 'degC', };
                },
            },
            {
                name: 'relativeHumidity',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    return { raw: value, value: (value * 0.01), unit: '%RH', };
                },
            },
            {
                name: 'ambientLight',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    return { raw: value, value: (value * 1.0), unit: 'lx', };
                },
            },
            {
                name: 'barometricPressure',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    return { raw: value, value: (value * 0.001), unit: 'hPa', };
                },
            },
            {
                name: 'soundNoise',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    return { raw: value, value: (value * 0.01), unit: 'dB', };
                },
            },
            {
                name: 'etvoc',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    return { raw: value, value: (value * 1.0), unit: 'ppb', };
                },
            },
            {
                name: 'eco2',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    return { raw: value, value: (value * 1.0), unit: 'ppm', };
                },
            },
            {
                name: 'discomfortIndex',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    return { raw: value, value: (value * 0.01), unit: null, };
                },
            },
            {
                name: 'heatStroke',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    return { raw: value, value: (value * 0.01), unit: 'degC', };
                },
            },
            {
                name: 'acceleration',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    return { raw: value, value: (value * 0.1), unit: 'gal', };
                },
            },
            {
                name: 'siValue',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    return { raw: value, value: (value * 0.1), unit: 'kine', };
                },
            },
            {
                name: 'pga',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    return { raw: value, value: (value * 0.1), unit: 'gal', };
                },
            },
            {
                name: 'seismicIntensity',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    return { raw: value, value: (value * 0.001), unit: null, };
                },
            },
            {
                name: 'siValueCalculationAxis',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    switch (value) {
                        case 0x00: {
                            return { raw: value, value: 'yz-axis' };
                        }
                        case 0x01: {
                            return { raw: value, value: 'xz-axis' };
                        }
                        case 0x02: {
                            return { raw: value, value: 'xy-axis' };
                        }
                    }
                },
            },
            {
                name: 'vibrationInformation',
                encode: (value) => {
                    return value;
                },
                decode: (value) => {
                    switch (value) {
                        case 0x00: {
                            return { raw: value, value: 'none' };
                        }
                        case 0x01: {
                            return { raw: value, value: 'during vibration' };
                        }
                        case 0x02: {
                            return { raw: value, value: 'during earthquake' };
                        }
                    }
                },
            },
        ];
        _it.contentTypeMap = new Map();
        for (const contentType of _it.contentTypeArray) {
            _it.contentTypeMap.set(contentType.name, contentType);
        }

        /** @type {Contents} */
        const it = {};
        it.ContentsConstructorOptions = () => {
            return _options
        };
        it._Contents = () => {
            return _it;
        };
        it.find = (value) => {
            return _it.contentTypeMap.get(value);
        };
        return it;

    };
    return { Contents };

})();

module.exports = { Contents: Contents({}) };
