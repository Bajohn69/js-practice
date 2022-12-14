const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
require("./config/passport"); // 直接 require 會直接執行
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
// const { reset } = require("nodemon");
mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://localhost:27017/GoogleDB")
  .then(() => {
    console.log("Connecting to mongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

//  middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());
// 讓 passport 運行他的認證功能
app.use(passport.session());
// 讓 passport 可以使用 session
app.use(flash());
app.use((req, res, next) => {
  // 這邊要看 partials/message.ejs
  // res.locals 設定的屬性可以在 ejs 做使用
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// 設定 routes(只要任何跟 /auth 有關的都要使用到 authRoutes 裡面的 routes)
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.get("/", (req, res) => {
  return res.render("index", { user: req.user });
});

app.listen(8080, () => {
  console.log("Server running on port 8080.");
});
