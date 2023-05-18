const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('SUM case', () => {
  it('type as SUM', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
});

describe('SUBTRACT case', () => {
  it('type as SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
});

describe('DIVIDE case', () => {
  it('type as DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
});

describe('Error Raise', () => {
  it('type as DIVIDE but with b = 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
