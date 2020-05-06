/**
 * node-omron-2jcie-bu/lib/commands.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

require('./annotations');

/**
 * @public
 * @type {Commands}
 */
const Commands = (() => {

    /**
     * @private
     */
    const privateScope = {};

    /**
     * @private
     * @type {CommandTypeArray}
     */
    privateScope.commandTypeArray = [
        {
            name: 'read',
            value: 0x01,
        },
        {
            name: 'write',
            value: 0x02,
        },
        {
            name: 'readError',
            value: 0x81,
        },
        {
            name: 'writeError',
            value: 0x82,
        },
        {
            name: 'unknown',
            value: 0xFF,
        },
    ];

    /**
     * @private
     * @type {CommandTypeMap}
     */
    privateScope.commandTypeMap = new Map();
    for (const commandType of privateScope.commandTypeArray) {
        privateScope.commandTypeMap.set(commandType.name, commandType);
        privateScope.commandTypeMap.set(commandType.value, commandType);
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
     * @param {CommandName | CommandValue} value
     * @return {CommandType}
     */
    publicScope.find = (value) => {
        return privateScope.commandTypeMap.get(value);
    };

    return publicScope;

})();

/**
 * @public
 */
module.exports = Commands;
