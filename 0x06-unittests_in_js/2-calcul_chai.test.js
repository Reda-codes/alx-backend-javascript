/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('type as SUM', () => {
  it('type as SUM', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
});
