const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(paymentMethods);
});

app.post('/login', (req, res) => {
  app.use(express.json());
  const userName = req.body.userName;
  res.send(`Welcome ${userName}`);
});

const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = server;