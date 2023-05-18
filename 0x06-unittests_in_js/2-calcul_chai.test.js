/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('type as SUM', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('type as SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('type as DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('type as DIVIDE but with b = 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
