interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Jack",
  lastName: "Zimmer",
  age: 25,
  location: "Rome"
};

const student2: Student = {
  firstName: "John",
  lastName: "wick",
  age: 54,
  location: "Unknown"
};

const studentsList: Student[] = [];

studentsList.push(student1);
studentsList.push(student2);

let tbl = document.createElement('table');

for (let i = 0; i < studentsList.length; i++) {
    let row = tbl.insertRow();
    let name = row.insertCell();
    let location = row.insertCell();
    name.innerHTML = studentsList[i].firstName;
    location.innerHTML = studentsList[i].location;
}

document.body.appendChild(tbl);