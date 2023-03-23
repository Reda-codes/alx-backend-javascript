import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new Error('Amount must be a number');
    if (currency instanceof Currency === false) throw new Error('Currency must be a currency');
    this._amount = amount;
    this._currency = currency;
  }

  set amount(amount) {
    if (typeof amount !== 'string') throw new Error('Amount must be a number');
    this._amount = amount;
  }

  set currency(currency) {
    if (currency instanceof Currency === false) throw new Error('Currency must be a currency');
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency._name} (${this._currency._code})`);
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw new Error('Amount must be a number');
    if (typeof conversionRate !== 'number') throw new Error('Amount must be a number');
    return (amount * conversionRate);
  }
}
