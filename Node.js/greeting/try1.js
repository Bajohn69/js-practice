function morning(name) {
  console.log("Good morning, " + name);
}

function sayHi(name) {
  console.log("Hello, " + name);
}

// module.exports.morning = morning
// module 可省略
exports.morning = morning;
exports.sayHi = sayHi;

// console.log(module.exports);
