export default class Car {
  constructor(brand, motor, color) {
    /* if (typeof brand !== 'string') throw new Error('Brand must be a string');
    if (typeof motor !== 'string') throw new Error('Motor must be a string');
    if (typeof color !== 'string') throw new Error('Color must be a string'); */
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  set brand(brand) {
    /* if (typeof brand !== 'string') throw new Error('brand must be a string'); */
    this._brand = brand;
  }

  set motor(motor) {
    /* if (typeof motor !== 'string') throw new Error('motor must be a string'); */
    this._motor = motor;
  }

  set color(color) {
    /* if (typeof color !== 'string') throw new Error('color must be a string'); */
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const NewObj = this.constructor[Symbol.species] || this.constructor;
    const clone = new NewObj();
    return clone;
  }
}
