/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('type as SUM', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('type as SUBTRACT', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('type as DIVIDE', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('type as DIVIDE but with b = 0', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
