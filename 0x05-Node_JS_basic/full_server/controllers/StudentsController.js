import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const DATABASE = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(DATABASE)
      .then(({
        cs, swe,
      }) => {
        const csCount = cs.length;
        const sweCount = swe.length;
        const csNames = cs.map((obj) => ` ${obj.firstname}`);
        const sweNames = swe.map((obj) => ` ${obj.firstname}`);
        const ress = `This is the list of our students\nNumber of students: ${csCount + sweCount}\nNumber of students in CS: ${csCount}. List:${csNames}\nNumber of students in SWE: ${sweCount}. List:${sweNames}`;
        response.end(ress);
      })
      .catch((error) => {
        console.error(error.message);
        response.statusCode = 500;
        response.end('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const DATABASE = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;
    if (major === 'CS') {
      readDatabase(DATABASE)
        .then(({
          cs,
        }) => {
          const csNames = cs.map((obj) => ` ${obj.firstname}`);
          const ress = `List:${csNames}`;
          response.end(ress);
        })
        .catch((error) => {
          console.error(error.message);
          response.statusCode = 500;
          response.end('Cannot load the database');
        });
    } else if (major === 'SWE') {
      readDatabase(DATABASE)
        .then(({
          swe,
        }) => {
          const sweNames = swe.map((obj) => ` ${obj.firstname}`);
          const ress = `List:${sweNames}`;
          response.end(ress);
        })
        .catch((error) => {
          console.error(error.message);
          response.statusCode = 500;
          response.end('Cannot load the database');
        });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
