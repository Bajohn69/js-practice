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

function Student(name, age, height, weight, major, grade) {
  // this keyword refers to Student 學生是人
  Person.call(this, name, age, height, weight);
  (this.major = major), (this.grade = grade);
}

// let Bajohn = new Student("Bajohn", 28, 163, 83, "js", 3.85);
// console.log(Bajohn);
// Bajohn.sayHi(); // Bajohn.sayHi is not a function (跟 Person.prototype 毫無關聯，沒有繼承

Student.prototype = Object.create(Person.prototype); // 繼承所有 prototype
// let Bajohn = new Student("Bajohn", 28, 163, 83, "js", 3.85);
// console.log(Bajohn);
// Bajohn.sayHi();

Student.prototype.study = function () {
  console.log("I am studying.");
};

let Bajohn = new Student("Bajohn", 28, 163, 83, "js", 3.85);
Bajohn.study();

let Mike = new Person("Mike", 26, 190, 90);
// Mike.study(); // Mike.study is not a function (Mike 不是學生)
