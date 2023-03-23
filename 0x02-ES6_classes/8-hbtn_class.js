export default class HolbertonClass {
  constructor(size, location) {
    if (typeof location !== 'string') throw new Error('Location must be a string');
    if (typeof size !== 'number') throw new Error('Size must be a number');

    this._size = size;
    this._location = location;
  }

  set size(size) {
    if (typeof size !== 'number') throw new Error('Size must be a number');
    this._size = size;
  }

  set location(location) {
    if (typeof location !== 'string') throw new Error('Location must be a string');
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    return this._location;
  }
}
