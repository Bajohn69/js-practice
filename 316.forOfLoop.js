/**
 * for of loop
 * 增加 code 可閱讀性
 */

let numbers = [10, 20, 30];

// for loop
for (let i = 0; i < numbers.length; i++) {
  console.log("for loop", numbers[i]);
}

// forEach method
numbers.forEach((n) => {
  console.log("forEach method", n);
});

// for of loop
// string & array 都可以用， object 不行
let myName = "Bajohn";
for (let n of numbers) {
  console.log("for of loop", n);
}
for (let n of myName) {
  console.log("for of loop myName", n);
}
let Bajohn = {
  name: "Bajohn Huang",
  age: 28,
};

// 壞
for (let n of Bajohn) {
  console.log(n); // TypeError: Bajohn is not iterable
}
