const express = require("express");
const app = express();
const ejs = require("ejs");
const https = require("node:https");
const fetch = require("node-fetch");

// api key
let myKey = "c5d130b07a5e9d7535b49b00a6c12c8e";

// kelvin to celsius 溫度
function KtoC(k) {
  return (k - 272.15).toFixed(1);
}

// middleware
app.use(express.static("public"));
app.set("view engine", ejs);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/:city", async (req, res) => {
  //   console.log("req.params:", req.params);
  let { city } = req.query;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

  // node-fetch 的另一種寫法 (記得加 async)

  let d = await fetch(url);
  let djs = await d.json();
  let { temp } = djs.main;
  let newTemp = KtoC(temp);
  res.render("weather.ejs", { djs, newTemp });

  //   fetch(url)
  //     .then((d) => d.json())
  //     .then((djs) => {
  //       let { temp } = djs.main; // destructing an object 把資料從物件拉出來
  //       let newTemp = KtoC(temp);
  //       res.render("weather.ejs", { djs, newTemp });
  //     });

  // ---------------------------- https -------------------------------------------

  //   參考: https://nodejs.org/dist/latest-v18.x/docs/api/https.html
  //    get request made by node.js
  //   換成 response 才不會搞混

  //   https
  //     .get(url, (response) => {
  //       console.log("statusCode:", response.statusCode);
  //       console.log("headers:", response.headers);

  //       response.on("data", (d) => {
  //         let djs = JSON.parse(d);
  //         // console.log(djs);
  //         // 我寫ㄉ
  //         // let tempK = djs.main.temp;
  //         // let tempC = Math.floor(KtoC(tempK));

  //         let { temp } = djs.main;
  //         let newTemp = KtoC(temp);

  //         res.render("weather.ejs", { djs, newTemp });
  //       });
  //     })
  //     .on("error", (e) => {
  //       console.log(e);
  //     });
  // ---------------------------- https -------------------------------------------

  //   node 沒有 fetch 以下不能用，所以要用 https
  //   let d = await fetch(url);
  //   let dj = await d.json();
  //   console.log(dj);
  //   res.render("weather.ejs");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
