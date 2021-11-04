function Student (firstname, lastname, id, grades) {
    this.firstname = firstname,
    this.lastname = lastname,
    this.id = id,
    this.grades = grades,
    
    this.fullname = function () {
      return this.firstname + ' ' + this.lastname;
    }
    
    this.average = function() {
      return this.grades.reduce((a,b) => a + b, 0) / this.grades.length;
    }
    
    this.print = function () {
      return (this.fullname() + ': ' + this.average());
    }
}


let student1 = new Student('Jan', 'Kowalsi', 1, [5, 3, 5, 4.5]);
let student2 = new Student('Ann', 'Smith', 2, [4, 5, 5, 3.5]);

console.log(student1.print()); 
console.log(student2.print()); 