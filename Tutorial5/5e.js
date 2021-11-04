class Student {
    constructor (firstname, lastname, id, grades){
      this.firstname = firstname,
      this.lastname = lastname,
      this.id = id,
      this.grades = grades
    }
   
    get average(){
      return this.grades.reduce((a, b) => a + b, 0) / this.grades.length; 
    }
    
    get fullname(){
      return this.firstname + ' ' + this.lastname;
    }
    
    set fullname(name){
      let array = name.split(' ');
      this.firstname = array[0] || '';
      this.lastname = array[1] || '';
    }

    print () {
        return (this.fullname + ': ' + this.average);
      }
}

let student1 = new Student('Jan', 'Kowalsi', 1, [5, 3, 5, 4.5]);

console.log(student1.print()); 

student1.fullname = 'John Smith';

console.log(student1.print());
