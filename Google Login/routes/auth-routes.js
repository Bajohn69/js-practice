// 舊寫法，可換成下面那行
// const express = require("express");
// const router = express.Router();

const router = require("express").Router();
const passport = require("passport");
const User = require("../models/user-model");
const bcrypt = require("bcrypt");

router.get("/login", (req, res) => {
  return res.render("login", { user: req.user });
});

// 登出就回首頁
router.get("/logout", (req, res) => {
  req.logOut((err) => {
    if (err) return res.send(err);
    return res.redirect("/");
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup", { user: req.user });
});

router.get(
  "/google",
  // middleware
  passport.authenticate("google", {
    scope: ["profile", "email"], // 也可以寫 email 等
    prompt: "select_account", // 讓使用者可以選擇用哪個帳號登入
  })
);

router.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
  // 為什麼 ejs 的 minlength 已經設定了還要再設定一次?
  // 因為如果有人用 postman 註冊就不會被檢查到
  if (password.length < 8) {
    req.flash("error_msg", "密碼長度過短，至少需要 8 個數字或英文字");
    return res.redirect("/auth/signup");
  }
  // 確認信箱是否被註冊過
  const foundEmail = await User.findOne({ email }).exec();
  if (foundEmail) {
    req.flash(
      "error_msg",
      "信箱已經被註冊，請使用另一個信箱，或嘗試使用此信箱登入系統"
    );
    return res.redirect("/auth/signup");
  }

  // 沒註冊過的話就要先加密密碼
  let hashedPassword = await bcrypt.hash(password, 12);
  let newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();
  req.flash("success_msg", "恭喜註冊成功，現在可以登入系統了");
  return res.redirect("/auth/login");
});

// 在 Local Strategy 中 post 到 /login 時，在 login.ejs 裡面 username 的 name 一定要叫 username，password 的 name 一定要叫 password
// 才會自動被套在 passport.use(new LocalStrategy((username, password, done) => {}));

router.post(
  "/login",
  // middleware
  passport.authenticate("local", {
    // 若登入失敗會導向到哪裡
    failureRedirect: "/auth/login",
    // 若登入失敗的 flash msg
    // 會自動套入 index.js 的 res.locals.error = req.flash("error");
    failureFlash: "登入失敗，帳號或密碼不正確",
  }),
  // authenticate 成功的話怎麼做
  (req, res) => {
    return res.redirect("/profile");
  }
);

router.get(
  "/google/redirect",
  // 通過 google 驗證才能使用的 route
  passport.authenticate("google"),
  (req, res) => {
    console.log("進入 redirect 區域");
    return res.redirect("/profile");
  }
);

module.exports = router;
