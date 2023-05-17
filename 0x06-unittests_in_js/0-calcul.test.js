const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('two integer numbers',function() {
        assert.equal(calculateNumber(1, 3), 4);
    });
    it('integer & a roundup float', function() {
	assert.equal(calculateNumber(1, 3.7), 5);
    });
    it('rounddown float & roundup float', function() {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it('Two roundup float numbers', function() {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });
    it('Integer & a string number', function() {
        assert.equal(calculateNumber(1, "3"), 4);
    });
    it('Integer & a string letter', function() {
        assert.equal(isNaN(calculateNumber(1, "L")), true);
    });
});

