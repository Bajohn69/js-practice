// 舊寫法，可換成下面那行
// const express = require("express");
// const router = express.Router();

const router = require("express").Router();
const passport = require("passport");

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

router.get(
  "/google",
  // middleware
  passport.authenticate("google", {
    scope: ["profile", "email"], // 也可以寫 email 等
    prompt: "select_account", // 讓使用者可以選擇用哪個帳號登入
  })
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
