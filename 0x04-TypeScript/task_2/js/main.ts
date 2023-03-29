interface DirectorInterface {
workFromHome(): string;
getCoffeeBreak(): string;
workDirectorTasks(): string;
}

interface TeacherInterface {
workFromHome(): string;
getCoffeeBreak(): string;
workTeacherTasks(): string;
}

class Director implements DirectorInterface {

  workFromHome() {
    return "Working from home"
  }

  getCoffeeBreak() {
    return "Getting a coffee break"
  }

  workDirectorTasks() {
    return "Getting to director tasks"
  }
}

class Teacher implements TeacherInterface {

  workFromHome() {
    return "Cannot work from home"
  }

  getCoffeeBreak() {
    return "Cannot have a break"
  }

  workTeacherTasks() {
    return "Getting to work"
  }
}

function createEmployee(salary: string | number) {
    if (typeof salary === "number" && salary < 500) {
      const teacher = new Teacher;
      return teacher
    }
      const director = new Director;
      return director
}

function isDirector(employee: Teacher | Director): Boolean {
    return employee instanceof Director;
}

function executeWork(employee: Teacher | Director) {
    if (employee instanceof Director) {
        console.log(employee.workDirectorTasks());
    } else if (employee instanceof Teacher) {
        console.log(employee.workTeacherTasks());
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

executeWork(createEmployee(200));
executeWork(createEmployee(2000));