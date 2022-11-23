// ternary operator 三元運算子

let age = 15;

// let price = age < 18 ? 50 : 100;

// if (age < 18) {
//   price = 50;
// } else {
//   price = 100;
// }

// 進階版
let price = age < 18 ? 50 : age < 60 ? 100 : 75; // panda wang 不建議

if (age < 18) {
  price = 50;
} else if (age < 60) {
  price = 100;
} else {
  price = 75;
}

console.log(price);
