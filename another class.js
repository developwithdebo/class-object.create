
class Person {
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }


  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}


var person1 = new Person("John", 25);


console.log(person1.name); 
console.log(person1.age);  


person1.displayInfo();     
