const router = require("express").Router();
const Post = require("../models/post-model");

// middleware
const authCheck = (req, res, next) => {
  if (req.isAuthenticated()) {
    next(); // 有被認證才進入個人頁
  } else {
    return res.redirect("/auth/login");
  }
};

router.get("/", authCheck, async (req, res) => {
  let postFound = await Post.find({
    author: req.user._id,
  });
  console.log("進入 /profile 區域");
  // posts: postFound 一起送進去 profile
  return res.render("profile", { user: req.user, posts: postFound }); // deSerializeUser()
});

router.get("/post", authCheck, (req, res) => {
  return res.render("post", { user: req.user });
});

router.post("/post", authCheck, async (req, res) => {
  let { title, content } = req.body;
  let newPost = new Post({ title, content, author: req.user._id });
  try {
    let savedPost = await newPost.save();
    return res.redirect("/profile");
  } catch (e) {
    req.flash("error_msg", "標題與內容都需要填寫");
    return res.redirect("/profile/post");
  }
});

module.exports = router;
