// Constructor Function 製作大量相似的 obj
// starts with uppercase letter 約定成俗大寫開頭
// Used with 'new' keyword. 創造一個新的 empty object (js reserved words)

function Person(name, age, height, weight) {
  // console.log(this); // Object{} (empty object)
  (this.name = name),
    (this.age = age),
    (this.height = height),
    (this.weight = weight),
    (this.sayHi = function () {
      console.log(this.name + " says hi.");
    });
}

let Bajohn = new Person("Bajohn", 28, 163, 83);
let Mike = new Person("Mike", 26, 186, 90);

// console.log(Bajohn);
// console.log(Mike);

Bajohn.sayHi();
