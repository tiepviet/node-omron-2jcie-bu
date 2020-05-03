/**
 * node-omron-2jcie-bu/lib/units.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

require('./annotations');

/**
 * @public
 * @type {Units}
 */
const Units = (() => {

    /**s
     * @private
     */
    const privateScope = {};

    /**
     * @private
     * @type {UnitTypeArray}
     */
    privateScope.unitTypeArray = [
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
                return {
                    _rawValue: value,
                    crcError: (value === 0x01),
                    commandError: (value === 0x02),
                    addressError: (value === 0x03),
                    lengthError: (value === 0x04),
                    dataError: (value === 0x05),
                    busy: (value === 0x06),
                };
            },
        },
    ];

    /**
     * @private
     * @type {UnitTypeMap}
     */
    privateScope.unitTypeMap = new Map();
    for (const unitType of privateScope.unitTypeArray) {
        privateScope.unitTypeMap.set(unitType.name, unitType);
    }

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
     * @param {UnitName} value
     * @return {UnitType}
     */
    publicScope.find = (value) => {
        return privateScope.unitTypeMap.get(value);
    };

    return publicScope;

})();

/**
 * @public
 */
module.exports = Units;
