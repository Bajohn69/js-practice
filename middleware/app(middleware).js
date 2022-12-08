const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");
// middlewares
app.use(express.static("public"));

// middleware 的順序是有意義ㄉ
// 一定要加 next() 才會執行下一個 middleware
// app.use((req, res, next) => {
//   console.log("Hi, I am the first middleware.");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Hi, I am the second middleware.");
//   next();
// });

// app.use((req, res, next) => {
//   // console.log(req.method); // GET
//   // res.send("Middleware page."); // 因為不能 send 兩次，所以會在這邊中斷
//   next();
// });

// 可以限定 middleware 出現在哪個特定 route
app.use("/student", (req, res, next) => {
  console.log("We reach this middleware.");
  next();
});

const studentMiddlware = (req, res, next) => {
  console.log("This is student middleware.");
  next();
};

const anotherMiddlware = (req, res, next) => {
  console.log("This is another middleware.");
  next();
};

// mongoose
//   .connect("mongodb://localhost:27017/test", {
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to mongodb.");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

app.get("/", (req, res) => {
  res.send("Welcome to homepage.");
});

// 可以這樣合在一起寫 app.get(route, middleware, (req, res))
// 通常不會有人這樣做(看下面)
// app.get(
//   "/student",
//   (req, res, next) => {
//     console.log("This is student route.");
//     next();
//   },
//   (req, res) => {
//     res.send("This is student page.");
//   }
// );

// 通常是這樣做(先宣告)再放進變數
// 可以串很多 middleware
app.get("/student", studentMiddlware, anotherMiddlware, (req, res) => {
  res.send("This is student page.");
});

// app.get("/student", (req, res) => {
//   res.send("Welcome to student page.");
// });

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
