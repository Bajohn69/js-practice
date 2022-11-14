// advanced array function
/**
 * map()
 * find()
 * filter()
 * some()
 * every()
 * sort()
 */

// map function
// the map() method 'creates a new array' populated(被...塞入) with the results of calling a provided function(call back function) on every element in the calling array.

let languages = ["java", "C++", "python", "js"];

// 匿名函式
// let upperLanguages = languages.map(function (i) {
//   return i.toUpperCase(); // call back function 一定要 return 東西
// });

// 也可以箭頭函式
let upperLanguages = languages.map((i) => {
  return i.toUpperCase(); // call back function 一定要 return 東西
});

console.log(upperLanguages);

const languages2 = [
  { name: "python", rating: 9.5, popularity: 9.7, trending: "super hot" },
  { name: "Java", rating: 8.6, popularity: 8.2, trending: "same" },
  { name: "c++", rating: 6.6, popularity: 7.7, trending: "same" },
  { name: "php", rating: 2.5, popularity: 4.7, trending: "decreasing" },
  { name: "js", rating: 8.5, popularity: 8.1, trending: "same" },
];

let newLanguages = languages2.map((lang) => {
  return lang.trending.toUpperCase();
});

console.log("newLanguages", newLanguages);
