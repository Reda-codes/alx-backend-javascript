const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('two integer numbers', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('integer & a roundup float', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('rounddown float & roundup float', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('two roundup float numbers', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('Two rounddown floats', () => {
    assert.equal(calculateNumber(3.1, 2.4), 5);
  });
  it('integer & a string number', () => {
    assert.equal(calculateNumber(1, '3'), 4);
  });
});
