// let try1 = require("./try1");
// let try2 = require("./try2");

// let myName = "Bajohn";

// console.log(try1);

// try1.morning(myName);
// try2.night(myName);
// try1.sayHi(myName);

let greeting = require("./greeting");
// 可以直接放資料夾
// require 一整個 folder 就會找到 index.js

// console.log(greeting);
let myName = "Mike";
greeting.sayHi(myName);
