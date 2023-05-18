const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('SUM case', () => {
  it('type as SUM', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
});

describe('SUBTRACT case', () => {
  it('type as SUBTRACT', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
});

describe('DIVIDE case', () => {
  it('type as DIVIDE', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
});

describe('Error Raise', () => {
  it('type as DIVIDE but with b = 0', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
