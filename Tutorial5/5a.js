let person = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    city: 'Warsaw',
    zipCode: '02-008',
    age: 20,
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },
    
    place: function() {
      return this.city + ' ' + this.zipCode;
    },
    
    greeting: function() {
        console.log('Hi, ' + this.fullName() + '!');
    }
  };
  
function properties(myObject){
    for(let property in myObject){
        console.log(property + ' of type ' + typeof(myObject[property]));
    }
}

properties(person);
person.greeting();
  