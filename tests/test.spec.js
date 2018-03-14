'use strict';
const chai = require('chai');
const expect = chai.expect;

describe('Test', () => {
    before(() => {
        process.env.RUN_TIME_ENV = 'TEST';
    });

    it('Should do something', async () => {

    }).timeout(50000);

    after(() => {

    });
});
