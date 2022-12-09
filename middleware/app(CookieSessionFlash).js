require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
// 用 flash 之前一定要裝 express-session

app.set("view engine", "ejs");
// middlewares
app.use(express.static("public"));
app.use(cookieParser(process.env.SECRET));
app.use(
  session({
    // secret: "Should be an env variable but not for now",
    secret: process.env.SECRET,
    resave: false, // 強制將此 session 重新保存回伺服器上的 session 儲存區
    saveUninitialized: false,
    // 這兩個基本上不會用到 true
  })
);
app.use(flash());
mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://localhost:27017/test", {
    // useFindAndModify: false,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongodb.");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/", (req, res) => {
  req.flash("success_msg", "Successfully get to the homepage.");
  // 之後有別的用法
  res.send("Hi, " + req.flash("success_msg"));

  // console.log(process.platform); // node.js process is a global object
  // console.log(process.version);
  // console.log(process.env.SECRET);
});

// session
// app.get("/", (req, res) => {
//   console.log(req.session);
//   res.send("Hi, welcome to homepage.");
// });

app.get("/verifyUser", (req, res) => {
  req.session.isVerified = true;
  res.send("You are verified.");
});

app.get("/secret", (req, res) => {
  if (req.session.isVerified == true) {
    res.send("Here is my secret - I love panda.");
  } else {
    res.status(403).send("You are not authorized to see my secret.");
    // 403 是沒有權限
  }
});

// cookie
// app.get("/", (req, res) => {
//   // res.cookie("name", "Wilson");
//   // 記得載 cookie-parser
//   let { address } = req.signedCookies;
//   console.log(req.cookies);
//   console.log(req.signedCookies);
//   let { name } = req.cookies;
//   // res.send(name + ", Welcome to homepage.");
//   res.send("Your address is " + address);
// });

// 簽名，防止被改資料
// app.get("/getSignedCookies", (req, res) => {
//   res.cookie("address", "Hawaii St.", { signed: true });
//   res.send("Cookie has been send.");
// });

app.get("/*", (req, res) => {
  res.status(404).send("404 Not found");
});

// error handler
// 給錯誤一個交代，不放的話使用者會看到錯誤程式訊息
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something is broken. We will fix it soon.");
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});

/**
 * cookie 缺點
 * 1.太小(4KB) local storage 5MB
 * 2.不能存重要資訊傳輸過程可能會被駭
 */

/**
 * session 是存在伺服器上的記憶體，正常應該要存 DB
 * 伺服器關掉 session 就被清掉ㄌ
 * 關掉頁面 session 還會在
 *
 * sid = session id
 */
