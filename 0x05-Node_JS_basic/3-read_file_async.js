const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
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
      const swe = dataObject.filter((obj) => obj.field === 'SWE');
      const csNames = cs.map((obj) => ` ${obj.firstname}`);
      const sweNames = swe.map((obj) => ` ${obj.firstname}`);
      console.log(`Number of students: ${cs.length + swe.length}`);
      console.log(`Number of students in CS: ${cs.length}. List:${csNames}`);
      console.log(`Number of students in SWE: ${swe.length}. List:${sweNames}`);
      resolve(true);
    }
  });
});
module.exports = countStudents;
