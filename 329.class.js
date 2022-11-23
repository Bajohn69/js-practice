// Constructor Function 製作大量相似的 obj
// starts with uppercase letter 約定成俗大寫開頭
// Used with 'new' keyword. 創造一個新的 empty object (js reserved words)

// function Person(name, age, height, weight) {
//   // console.log(this); // Object{} (empty object)
//   (this.name = name),
//     (this.age = age),
//     (this.height = height),
//     (this.weight = weight);
// }

// Person.prototype.sayHi = function () {
//   console.log(this.name + " says hi.");
// };

// Person.prototype.intro = function () {
//   console.log("Hi, my name is " + this.name + ".");
// };

// class 是 constructor 的語法糖，這樣寫跟上面一樣
class Person {
  constructor(name, age, height, weight) {
    (this.name = name),
      (this.age = age),
      (this.height = height),
      (this.weight = weight);
  }
  sayHi() {
    console.log(this.name + " says hi.");
  }
  intro() {
    console.log("Hi, my name is " + this.name + ".");
  }
}

let Mike = new Person("Mike", 26, 190, 90);
let Bajohn = new Person("Bajohn", 28, 163, 83);

console.log(Mike, Bajohn);
console.log(Mike.sayHi === Bajohn.sayHi); // true 因為他們是從同一個 prototype 繼承 function

class Student extends Person {
  constructor(name, age, height, weight, major, grade) {
    super(name, age, height, weight); // super 是母集合
    (this.major = major), (this.grade = grade);
  }
  study() {
    console.log("I am studying.");
  }
}

let Wilson = new Student("Wilson", 25, 180, 75, "js", 3.85);
console.log(Wilson);

// function Student(name, age, height, weight, major, grade) {
//   // this keyword refers to Student 學生是人
//   Person.call(this, name, age, height, weight);
//   (this.major = major), (this.grade = grade);
// }

// // let Bajohn = new Student("Bajohn", 28, 163, 83, "js", 3.85);
// // console.log(Bajohn);
// // Bajohn.sayHi(); // Bajohn.sayHi is not a function (跟 Person.prototype 毫無關聯，沒有繼承

// Student.prototype = Object.create(Person.prototype); // 繼承所有 prototype
// // let Bajohn = new Student("Bajohn", 28, 163, 83, "js", 3.85);
// // console.log(Bajohn);
// // Bajohn.sayHi();

// Student.prototype.study = function () {
//   console.log("I am studying.");
// };

// let Bajohn = new Student("Bajohn", 28, 163, 83, "js", 3.85);
// Bajohn.study();

// let Mike = new Person("Mike", 26, 190, 90);
// // Mike.study(); // Mike.study is not a function (Mike 不是學生)
