// create objetects with prototypes 
 function student(name,lastName, note) {
     this.name = name
     this.lastName = lastName
     this.note = note
}

student.prototype.startStudy = function( ){
    return console.log("start to study")
}
student.prototype.endStudy = function( ){
    return console.log("start to study")
}

let someData = new student("bernabee", "gonzalez",10) ;

class animal {
    constructor(name, breed, color) {
        this.name = name    
        this.breed = breed
        this.color = color
    }
    run() {
        return alert('Woof!');
    }
}

// Abstraction
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
}
class Model extends Car { // inheritance
    constructor(brand, mod) {
      super(brand); // polymorphism
      this.model = mod;
    }
    // encapsulation data
    get name() {
      return this.present() + ', it is a ' + this.model;
    }
    set changeModel(newModel) {
        return this.model = newModel;
    }

}
mycar = new Model("Ford", "Mustang");

document.getElementById("demo").innerHTML = mycar.name;


function multiplicar(a) {

    return function (b) {
        return function (c)  {
            return a * b * c
        }
    }
}
let mc1 = multiplicar(1);
let mc2 = mc1(2);