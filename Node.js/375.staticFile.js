// 用 express 做 http 的 server
const express = require("express");
const app = express(); // 馬上執行這個 function
// app 是大家通用ㄉ
const path = require("path");

// serving a static file
// middleware
app.use(express.static("public"));
// public(資料夾) 是隨便取的但大家通用
// public 放靜態文件(如 css)

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
  res.status(302);
  res.sendFile(path.join(__dirname, "moved.html"));
});

// 404 error
app.get("*", (req, res) => {
  res.status(404);
  console.log(res.statusCode); // 404
  // res.send("No page found.");
  res.sendFile(path.join(__dirname, "error.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
// listen(port, function)
