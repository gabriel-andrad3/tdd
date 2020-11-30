const should = require('chai').should();
const bhaskara = require('../src/bhaskara');

describe('Bhaskara', () => {
    context('delta', () => {
        it('should calculate delta', () => {            
            bhaskara.calculateDelta(4, 2, -6).should.equal(100);
        })
    })
})