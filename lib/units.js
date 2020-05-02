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
     * @functions
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
