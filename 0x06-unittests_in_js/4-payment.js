const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const SUM = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${SUM}`);
}

module.exports = sendPaymentRequestToApi;