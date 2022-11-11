// rest parameter

// 可放任意數量的參數
// console.log(Math.max(-2, 6, 3, 1, 17, 100, 65));

// 只能放一個參數
// function checkBiggest(arr) {
//   let biggest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > biggest) {
//       biggest = arr[i];
//     }
//   }
//   return biggest;
// }

// 可放任意數量的參數
function checkBiggest(...numbers) {
  let biggest = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
      biggest = numbers[i];
    }
  }
  return biggest;
}

console.log(checkBiggest(-2, 6, 3, 1, 17, 100, 65));
