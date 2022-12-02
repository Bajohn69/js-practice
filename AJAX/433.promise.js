// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise
let example = new Promise((resolve, reject) => {
  //   resolve({ name: "Bajohn", age: 28 });
  reject(new Error("not allowed"));
});

example
  // resolve 的話
  .then((d) => {
    console.log(d);
  })
  // reject 的話
  .catch((e) => {
    console.log(e);
  });
