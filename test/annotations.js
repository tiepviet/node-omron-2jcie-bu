/* eslint-env mocha */

'use strict';

const expect = require('expect');

const Annotations = require('../lib/annotations');

describe('Annotations', () => {

    it('<noop>', () => {
        expect(Annotations).toEqual({});
    });

});
