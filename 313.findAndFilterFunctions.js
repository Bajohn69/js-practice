// advanced array function
/**
 * map()
 * find()
 * filter()
 * some()
 * every()
 * sort()
 */

// find function
// returns the first element in an array that fits the certain condition. 回傳符合條件的第一個 element

// filter function
// filter function works like find, but will return all the things that fit the condition. 回傳符合條件的所有 element

const languages2 = [
  { name: "python", rating: 9.5, popularity: 9.7, trending: "super hot" },
  { name: "Java", rating: 8.6, popularity: 8.2, trending: "same" },
  { name: "c++", rating: 6.6, popularity: 7.7, trending: "same" },
  { name: "php", rating: 2.5, popularity: 4.7, trending: "decreasing" },
  { name: "js", rating: 8.5, popularity: 8.1, trending: "same" },
];

let result = languages2.find((lang) => {
  return lang.rating > 7.5;
});

console.log("find", result);

let result2 = languages2.filter((lang) => {
  return lang.rating > 7.5;
});

console.log("filter", result2);
