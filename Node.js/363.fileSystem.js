// let path = require("path");

// // console.log(path.join(__dirname, "try.js"));
// // join 把前後兩個 東西接起來
// // C:\Users\skksy\OneDrive\桌面\js-practice\Node.js\try.js

// let newPath = path.join(__dirname, "try.js");
// console.log(newPath);

// console.log(path.extname(__filename));
// // .js
// console.log(path.basename(__filename));
// // 363.app.js

// ----------------------------------

// const url = require("url");

// const pandaURL =
//   "http://127.0.0.1:5500/js-practice/Hawaii%20Project/index.html";

// const parseURL = url.parse(pandaURL, true);

// console.log(parseURL.host);
// // 127.0.0.1:5500

// console.log(parseURL.hostname);
// // 127.0.0.1

// console.log(parseURL.path);
// // /js-practice/Hawaii%20Project/index.html

// console.log(parseURL.pathname);
// // /js-practice/Hawaii%20Project/index.html

// console.log(parseURL.query);
// // [Object: null prototype] {} 會得到一個物件

// console.log(parseURL.query.email);
// // 會得到一個物件裡面的 email value

// ----------------------------------

// fs = file system
const fs = require("fs");

// fs.writeFile("try.txt", "Today is a good day.", (e) => {
//   if (e) throw e;
//   //   錯誤狀態
//   //   e = error

//   console.log("File has been written.");
//   // 成功狀態
// });

// weiteFile('檔案名稱', '寫入內容', function(匿名/normal/error))

fs.readFile("try.txt", "utf8", (e, data) => {
  if (e) throw e;
  //   錯誤狀態

  console.log(data);
  // 成功狀態
});

// readfile('名稱', 'encoding', function)
