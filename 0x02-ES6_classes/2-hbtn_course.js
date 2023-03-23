export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new Error('Name must be a string');
    if (typeof length !== 'number') throw new Error('Length must be a number');
    if (Array.isArray(students) !== true) throw new Error('students must be an array');
    students.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('students must be an array of strings');
    });

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof name !== 'string') throw new Error('Name must be a string');
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') throw new Error('Length must be a number');
    this._length = length;
  }

  set students(students) {
    if (Array.isArray(students) !== true) throw new Error('students must be an array');
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
