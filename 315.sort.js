// sort
// let fruits = ["grapes", "apple", "banana"];

// console.log(fruits.sort()); // 照字母排列 [ 'apple', 'banana', 'grapes' ]

// fruits.sort(); // 要小心會改變原本的 array

// console.log(fruits); // [ 'apple', 'banana', 'grapes' ]

let luckies = [15, 1, 16, 17, 2, 3, 99];
// console.log(luckies.sort()); // [1, 15, 16, 17, 2,  3, 99] string comparison

luckies.sort((a, b) => {
  // 這樣寫才會正常排
  return a - b;
  //   return b - a 大到小
});

console.log(luckies);

// 依 array 長度排序

let fruits = ["grapes", "apple", "watermelon"];

fruits.sort((a, b) => {
  return a.length - b.length;
});

console.log(fruits);
