/* eslint-disable no-restricted-globals */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
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
  it('integer & a string number', () => {
    assert.equal(calculateNumber(1, '3'), 4);
  });
  it('integer & a string letter', () => {
    assert.equal(isNaN(calculateNumber(1, 'L')), true);
  });
});
