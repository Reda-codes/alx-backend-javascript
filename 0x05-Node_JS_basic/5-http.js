const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;
const DATABASE = process.argv.length > 2 ? process.argv[2] : '';

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
      resolve({
        cs, swe, csNames, sweNames,
      });
    }
  });
});

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(DATABASE)
      .then(({
        cs, swe, csNames, sweNames,
      }) => {
        const csCount = cs.length;
        const sweCount = swe.length;
        const response = `This is the list of our students\nNumber of students: ${csCount + sweCount}\nNumber of students in CS: ${csCount}. List:${csNames}\nNumber of students in SWE: ${sweCount}. List:${sweNames}`;
        res.end(response);
      })
      .catch((error) => {
        console.error(error.message);
        res.end('This is the list of our students\n');
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
