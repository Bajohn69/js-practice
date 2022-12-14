require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
// 用 flash 之前一定要裝 express-session
const bodyParser = require("body-parser");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10; // 10-12 就好

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
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set("strictQuery", true);

// 使用者一定要先登入才能看到 /secret
const requireLogin = (req, res, next) => {
  if (!req.session.isVerified) {
    res.redirect("login");
  } else {
    next();
  }
};

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
  res.send("Home page");
});

app.get("/secret", requireLogin, (req, res) => {
  res.render("secret");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res, next) => {
  let { username, password } = req.body;

  try {
    let foundUser = await User.findOne({ username });
    if (foundUser) {
      bcrypt.compare(password, foundUser.password, (err, result) => {
        if (err) {
          next(err);
        }

        if (result === true) {
          req.session.isVerified = true;
          res.redirect("secret");
        } else {
          res.send("Username or password not correct.");
        }
      });
    } else {
      res.send("Username or password not correct.");
    }

    // 資安會有問題
    // if (foundUser && password == foundUser.password) {
    //   res.render("secret");
    // } else {
    //   res.send("Username or password not correct.");
    // }

    // if (!foundUser) {
    //   res.send("Username is not found");
    //   // 通常會二擇一告訴你，這樣系統比較安全
    // } else {
    //   if (password == foundUser.password) {
    //     res.render("secret");
    //   } else {
    //     res.send("Password not correct");
    //   }
    // }
  } catch (error) {
    next(error);
  }
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res, next) => {
  // console.log(req.body);
  let { username, password } = req.body;
  // 防止一樣的帳號被註冊
  try {
    let foundUser = await User.findOne({ username });
    if (foundUser) {
      res.send("Username has been taken.");
    } else {
      // 先加密
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
          next(err);
        }
        // console.log("salt:", salt);
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            next(err);
          }
          // console.log("hash:", hash);

          let newUser = new User({ username, password: hash });
          try {
            newUser
              .save()
              .then(() => {
                res.send("Data has been saved.");
              })
              .catch((e) => {
                console.log("error", e);
              });
          } catch (err) {
            next(err);
          }
        });
      });
    }
  } catch (error) {
    next(error);
  }

  // let newUser = new User({ username, password });
  // try {
  //   newUser
  //     .save()
  //     .then(() => {
  //       res.send("Data has been saved.");
  //     })
  //     .catch((e) => {
  //       console.log("error", e);
  //     });
  // } catch (err) {
  //   next(err);
  // }
});

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
