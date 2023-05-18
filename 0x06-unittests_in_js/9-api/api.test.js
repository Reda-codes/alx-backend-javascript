const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('Check GET / response', (done) => {
    request.get(`http://localhost:7865/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id with valid id', (done) => {
    request.get(`http://localhost:7865/cart/22`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 22');
      done();
    });
  });

  it('GET /cart/:id with non valid id', (done) => {
    request.get(`http://localhost:7865/cart/bb`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});