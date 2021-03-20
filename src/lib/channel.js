/**
 * node-omron-2jcie-bu/src/lib/channel.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

const SerialPort = require('serialport');

const { Channel } = (() => {

    /** @typedef ChannelConstructorOptions @type {import('../../types').ChannelConstructorOptions} */
    /** @typedef _Channel @type {import('../../types')._Channel} */
    /** @typedef Channel @type {import('../../types').Channel} */
    /** @typedef ChannelConstructor @type {import('../../types').ChannelConstructor} */

    /** @type {ChannelConstructor} */
    const Channel = (options) => {

        /** @type {ChannelConstructorOptions} */
        const _options = options;

        /** @type {_Channel} */
        const _it = {};
        /* istanbul ignore next */
        if (typeof options.path === 'function') {
            // @ts-ignore
            options.path = _options.path({
                SerialPort
            });
        }
        _it.serialPort = new SerialPort(options.path, {
            baudRate: 115200,
            dataBits: 8,
            stopBits: 1,
            parity: 'none',
            rtscts: false,
            xon: false,
            xoff: false,
            xany: false,
            autoOpen: false,
        });

        /** @type {Channel} */
        const it = {};
        it.ChannelConstructorOptions = () => {
            return _options;
        };
        it._Channel = () => {
            return _it;
        };
        it.input = () => {
            return _it.serialPort;
        };
        it.output = () => {
            return _it.serialPort;
        };
        it.open = () => {
            return new Promise((resolve, reject) => {
                if (_it.serialPort.isOpen) {
                    return void resolve();
                }
                _it.serialPort.open((error) => {
                    /* istanbul ignore next */
                    if (error != null) {
                        return void reject(error);
                    }
                    resolve();
                });
            });
        };
        it.close = () => {
            return new Promise((resolve, reject) => {
                if (!_it.serialPort.isOpen) {
                    return void resolve();
                }
                _it.serialPort.close((error) => {
                    /* istanbul ignore next */
                    if (error != null) {
                        return void reject(error);
                    }
                    resolve();
                });
            });
        };
        return it;

    };
    return { Channel };

})();

module.exports = { Channel };
