// advanced array function
/**
 * map()
 * find()
 * filter()
 * some()
 * every()
 * sort()
 */

// some and every
// returns a boolean value indicating if certain condition is true or not.

const languages2 = [
  { name: "python", rating: 9.5, popularity: 9.7, trending: "super hot" },
  { name: "Java", rating: 8.6, popularity: 8.2, trending: "same" },
  { name: "c++", rating: 6.6, popularity: 7.7, trending: "same" },
  { name: "php", rating: 2.5, popularity: 4.7, trending: "decreasing" },
  { name: "js", rating: 8.5, popularity: 8.1, trending: "same" },
];

let result = languages2.some((lang) => {
  return lang.rating > 7.5;
});

console.log("some", result);

let result2 = languages2.every((lang) => {
  return lang.rating > 7.5;
});

console.log("every", result2);
