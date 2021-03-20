/**
 * node-omron-2jcie-bu/src/lib/commands.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

const { Commands } = (() => {

    /** @typedef CommandsConstructorOptions @type {import('../../types').CommandsConstructorOptions} */
    /** @typedef _Commands @type {import('../../types')._Commands} */
    /** @typedef Commands @type {import('../../types').Commands} */
    /** @typedef CommandsConstructor @type {import('../../types').CommandsConstructor} */

    /** @type {CommandsConstructor} */
    const Commands = (options) => {

        /** @type {CommandsConstructorOptions} */
        const _options = options;

        /** @type {_Commands} */
        const _it = {};
        _it.commandTypeArray = [
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
        _it.commandTypeMap = new Map();
        for (const commandType of _it.commandTypeArray) {
            _it.commandTypeMap.set(commandType.name, commandType);
            _it.commandTypeMap.set(commandType.value, commandType);
        }

        /** @type {Commands} */
        const it = {};
        it.CommandsConstructorOptions = () => {
            return _options;
        };
        it._Commands = () => {
            return _it;
        };
        it.find = (value) => {
            return _it.commandTypeMap.get(value);
        };
        return it;

    };
    return { Commands };

})();

module.exports = { Commands: Commands({}) };
