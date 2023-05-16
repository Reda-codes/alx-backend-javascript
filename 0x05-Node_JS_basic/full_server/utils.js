const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
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
      resolve({
        cs, swe,
      });
    }
  });
});

module.exports = readDatabase;
