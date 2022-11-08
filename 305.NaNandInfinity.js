console.log(typeof NaN); // number
console.log(typeof Infinity); // number
console.log(0 / 0); // NaN
console.log(NaN == NaN); // false
let result = 0 / 0;
console.log(result == NaN); // false
console.log(isNaN(result)); // true
