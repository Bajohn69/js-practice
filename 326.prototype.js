// Constructor Function 製作大量相似的 obj
// starts with uppercase letter 約定成俗大寫開頭
// Used with 'new' keyword. 創造一個新的 empty object (js reserved words)

function Person(name, age, height, weight) {
  // console.log(this); // Object{} (empty object)
  (this.name = name),
    (this.age = age),
    (this.height = height),
    (this.weight = weight);
}

Person.prototype.sayHi = function () {
  console.log(this.name + " says hi.");
};

Person.prototype.intro = function () {
  console.log("Hi, my name is " + this.name + ".");
};

let Bajohn = new Person("Bajohn", 28, 163, 83);
let Mike = new Person("Mike", 26, 186, 90);

// console.log(Bajohn);
// console.log(Mike);

console.log(Bajohn.sayHi === Mike.sayHi); // true

Bajohn.sayHi();
Mike.sayHi();

Bajohn.intro();

// Protorype Inheritance

let myName = new String("Bajohn");
console.log(typeof myName); // object

let myName2 = "Bajohn";
console.log(typeof myName2); // string

let num = [15, 22, 3];
let num2 = new Array(15, 22, 3);
console.log(num); // [ 15, 22, 3 ]
console.log(num2); // [ 15, 22, 3 ]
