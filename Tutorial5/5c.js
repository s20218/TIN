function createStudent (prototype, firstname, lastname, id, grades) {
    let student = Object.create(prototype);
    student.firstname = firstname,
    student.lastname = lastname,
    student.id = id;
    
    return student;
}

let prototype = {
  courses: ['ZPR', 'BYT', 'GRK', 'TIN', 'PRO']
}

let student1 = createStudent(prototype, 'Jan', 'Kowalski', 1);

console.log(student1.firstname + ' ' + student1.lastname + ': ' + student1.courses); 