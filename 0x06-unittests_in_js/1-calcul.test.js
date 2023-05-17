const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    it('type as SUM',function() {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('type as SUBTRACT',function() {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('type as DIVIDE',function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('type as DIVIDE but with b = 0',function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
});