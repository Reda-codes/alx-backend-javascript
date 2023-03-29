interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Student {
  firstName: string;
  lastName: string;
}

interface StudentClassIn {
workOnHomework(): string;
displayName(): string;
}

class StudentClass implements StudentClassIn{
 
  constructor(public student: Student) {}

  workOnHomework() {
    return "Currently working"
  }

  displayName() {
    return this.student.firstName
  }
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string) {
    return `${firstName.charAt(0)}. ${lastName}`;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

console.log(printTeacher("John", "Doe"));

const student1: Student = { firstName: "Darth", lastName: "Vader" };
const student1Class = new StudentClass(student1);

console.log(student1.firstName);
console.log(student1Class.student.firstName);
console.log(student1Class.workOnHomework());