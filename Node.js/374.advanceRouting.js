// 用 express 做 http 的 server
const express = require("express");
const app = express(); // 馬上執行這個 function
// app 是大家通用ㄉ
const path = require("path");
// **post 第一步
const bodyParser = require("body-parser");

// **post 第二步
// middleware
app.use(bodyParser.urlencoded({ extended: true }));

// request handling
// 註解掉就會 Cannot GET /
// handling different request
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  // path.join 就不用 / (斜線)
  // res.sendFile(__dirname + "/index.html");
});
// get(網址, function)

app.get("/bajohn", (req, res) => {
  res.send(`This is Bajohn's page.`);
});

app.get("/mike", (req, res) => {
  res.send(`This is Mike's page.`);
});

// routing for pattern
app.get("/:fruit/:someFruit", (req, res) => {
  // 若前面變 /:fruit/:someFruit
  // console.log(req.params); // { fruit: 'fruit', someFruit: 'banana' }
  // -----
  // console.log(req.params); // {someFruit: 'banana' }
  let { someFruit } = req.params; // destructing an object (複習 339)

  // res.send("You are looking for " + req.params.someFruit);
  res.send("You are looking for " + someFruit);
});

// **post 第三步
// routing for query
// app.post("/formHandling", (req, res) => {
//   // console.log(req.body);
//   let { fullName, age } = req.body;
//   res.send(
//     `Thanks for posting. Your name is ${fullName}, and your age is ${age}.`
//   );
// });

// **get 不用這麼多步
app.get("/formHandling", (req, res) => {
  // console.log(req.query); // { fullName: 'Grace', age: '3' }
  let { fullName, age } = req.query;
  res.send(`Thanks ${fullName} for sending data.`);
});

// routing for all
// **一定要放在最下面
app.get("*", (req, res) => {
  res.send("Cannot find what you want.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

// listen(port, function)

// http HyperText Transfer Protocol 超文字傳輸協議
// get request 獲得資訊的請求 (如 youtube button)
// post request 給(個人)資訊 (如填問卷)
