// default parameter

// function multiply(a, b) {
//   if (a === undefined) {
//     a = 1;
//   }
//   if (b === undefined) {
//     b = 1;
//   }

//   console.log(a * b);
// }

// default parameter 新的寫法
function multiply(a = 1, b = 1) {
  console.log(a * b);
}

// multiply(5, 2);
multiply(5);
