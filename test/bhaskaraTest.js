const should = require('chai').should();
const bhaskara = require('../src/bhaskara');

describe('Bhaskara', () => {
    context('delta', () => {
        it('results positive', () => {
            bhaskara.calculateDelta(4, 2, -6).should.equal(100);
        })
        
        it('results zero', () => {
            bhaskara.calculateDelta(1, -10, 25).should.equal(0);
        })

        it('results negative', () => {
            bhaskara.calculateDelta(7, 3, 4).should.equal(-103);
        }) 
    })

    context('roots', () => {
        it('calculateRoot1', () => {
            bhaskara.calculateRoot1(2, -10, 36).should.equal(4);
        })

        it('calculateRoot2', () => {
            bhaskara.calculateRoot2(2, -10, 36).should.equal(1);
        })
    })    
})