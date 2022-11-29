// 用 express 做 http 的 server
const express = require("express");
const app = express(); // 馬上執行這個 function
// app 是大家通用ㄉ

// request handling
// 註解掉就會 Cannot GET /
// handling different request
app.get("/", (req, res) => {
  //   console.log(req);
  //   console.log(res); // 都會有很大的 obj
  //   -----
  // res.send("<h1>You are on the homepage.</h1>");
  // res.send('<p>Welcome.</p>') // 這行不會出現因為只能 send 一次
  //   -----
  //   res.sendFile(__dirname + "/index.html");
  //   直接送 html
  //   -----
  //   API
  let Bajohn = {
    name: "Bajohn",
    age: 28,
  };
  res.send(Bajohn); // 收到 JSON 格式的物件 {"name":"Bajohn","age":28}
});
// get(網址, function)

app.get("/bajohn", (req, res) => {
  res.send(`This is Bajohn's page.`);
});

app.get("/mike", (req, res) => {
  res.send(`This is Mike's page.`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

// listen(port, function)

// http HyperText Transfer Protocol 超文字傳輸協議
// get request 獲得資訊的請求 (如 youtube button)
// post request 給(個人)資訊 (如填問卷)
