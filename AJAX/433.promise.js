// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise
// promise 是 asynchronous function 所 return 的物件，主要功能是 Promise 會代理一的建立時不用預先得知結果的值
/**
 * 1.pending
 * 2.fulfilled
 * 3.rejected
 *
 */
// let example = new Promise((resolve, reject) => {
//   //   resolve({ name: "Bajohn", age: 28 });
//   reject(new Error("not allowed"));
// });

// example
//   // resolve 的話
//   .then((d) => {
//     console.log(d);
//   })
//   // reject 的話
//   .catch((e) => {
//     console.log(e);
//   });

let fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);

fetchPromise.then((res) => {
  // console.log(fetchPromise);
  // console.log(res);
  // let jsonPromise = res.json(); // response => JSON
  // .json() method is also async
  // return Promise object
  // console.log("jsonPromise:", jsonPromise);
  res.json().then((data) => {
    console.log(data);
  });
});

// 等同於上面
fetchPromise
  .then((res) => {
    return res.json;
  })
  .then((data) => {
    // 他的 data 是前一個 then 的回傳值
    console.log(data);
  });
