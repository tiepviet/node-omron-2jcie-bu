'use strict';

const expect = require('expect');

const Utilities = require('../lib/utilities');

describe('Utilities', () => {

    describe('.privateScope()', () => {

        it('<empty>', () => {
            const privateScope = Utilities.privateScope();
            expect(privateScope).toBeInstanceOf(Object);
        });

    });

});
