const router = require("express").Router();

// middleware
const authCheck = (req, res, next) => {
  if (req.isAuthenticated()) {
    next(); // 有被認證才進入個人頁
  } else {
    return res.redirect("/auth/login");
  }
};

router.get("/", authCheck, (req, res) => {
  console.log("進入 /profile 區域");
  return res.render("profile", { user: req.user }); // deSerializeUser()
});

module.exports = router;
