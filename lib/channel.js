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
const serialport = require('serialport');

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
    privateScope.serialport = new serialport(options.path, {
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
        return privateScope.serialport;
    };

    /**
     * @public
     * @function
     * @return {Stream}
     */
    publicScope.output = () => {
        return privateScope.serialport;
    };

    /**
     * @public
     * @function
     * @return {Promise<void>}
     */
    publicScope.open = () => {
        return new Promise((resolve, reject) => {
            if (privateScope.serialport.isOpen) {
                return void resolve();
            }
            privateScope.serialport.open((error) => {
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
            if (!privateScope.serialport.isOpen) {
                return void resolve();
            }
            privateScope.serialport.close((error) => {
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
