/**
 * node-omron-2jcie-bu/lib/channel.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

require('./annotations');

/**
 * @private
 */
const SerialPort = require('serialport');

/**
 * @public
 * @function
 * @param {ChannelOptions} options 
 * @return {Channel}
 */
const Channel = (options) => {

    /**
     * @private
     */
    const privateScope = {};

    /**
     * @private
     * @type {serialport}
     */
    /* istanbul ignore next */
    if (typeof options.path === 'function') {
        options.path = options.path({
            SerialPort,
        });
    }
    privateScope.serialPort = new SerialPort(options.path, {
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
        return privateScope.serialPort;
    };

    /**
     * @public
     * @function
     * @return {Stream}
     */
    publicScope.output = () => {
        return privateScope.serialPort;
    };

    /**
     * @public
     * @function
     * @return {Promise<void>}
     */
    publicScope.open = () => {
        return new Promise((resolve, reject) => {
            if (privateScope.serialPort.isOpen) {
                return void resolve();
            }
            privateScope.serialPort.open((error) => {
                /* istanbul ignore next */
                if (error != null) {
                    return void reject(error);
                }
                resolve();
            });
        });
    };

    /**
     * @public
     * @function
     * @return {Promise<void>}
     */
    publicScope.close = () => {
        return new Promise((resolve, reject) => {
            if (!privateScope.serialPort.isOpen) {
                return void resolve();
            }
            privateScope.serialPort.close((error) => {
                /* istanbul ignore next */
                if (error != null) {
                    return void reject(error);
                }
                resolve();
            });
        });
    };

    return publicScope;

};

/**
 * @public
 */
module.exports = Channel;
