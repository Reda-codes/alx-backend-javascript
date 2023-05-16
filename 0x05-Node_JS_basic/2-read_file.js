const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const dataObject = data.split('\n').map((line) => {
      const data = line.split(',');
      return {
        firstname: data[0],
        lastname: data[1],
        age: data[2],
        field: data[3],
      };
    });
    const cs = dataObject.filter((obj) => obj.field === 'CS');
    const csNames = cs.map((obj) => ` ${obj.firstname}`);
    const sweNames = cs.map((obj) => ` ${obj.firstname}`);
    const swe = dataObject.filter((obj) => obj.field === 'SWE');
    console.log(`Number of students: ${cs.length + swe.length}`);
    console.log(`Number of students in CS: ${cs.length}. List:${csNames}`);
    console.log(`Number of students in CS: ${swe.length}. List:${sweNames}`);
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
