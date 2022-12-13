const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/user-model");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

// 這邊的 done 跟下面的 done 沒關聯
// serializeUser: 把使用者的資料用 bytes 的形式存到 session (UnserializeUser 就是反推回來)
// serializeUser((user, done)) 的 user 會自動帶入下面的 foundUser/saveUser(下面 done 的第二個參數(callback function))
passport.serializeUser((user, done) => {
  console.log("serialize 使用者", user);
  done(null, user._id); // 將 mongoDB 的 id 存在 session，並將 id 簽名後以 cookie 的形式給使用者
  // _id 是在 mongoDB 裡面的 id
});

passport.deserializeUser(async (_id, done) => {
  console.log("DeserializeUser"); // 將使用 serializeUser 儲存的 id 去找到資料庫內的資料
  let foundUser = await User.findOne({ _id }); // 自動抓到 serialize 使用者的 _id
  done(null, foundUser); // 將 req.user 這個屬性設定為 foundUser
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect", // 做完所有事後重新導向
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("進入Google Strategy 的區域");
      //   console.log(profile);
      //   console.log("--------------------------------");
      let foundUser = await User.findOne({ googleID: profile.id }).exec();
      if (foundUser) {
        console.log("使用者已經註冊過了，無需存入資料庫內");
        done(null, foundUser);
      } else {
        console.log("偵測到新用戶，存入資料庫內");
        let newUser = new User({
          name: profile.displayName,
          googleID: profile.id,
          thumbnail: profile.photos[0].value,
          email: profile.emails[0].value,
        });
        let saveUser = await newUser.save();
        console.log("成功創建新用戶");
        done(null, saveUser);
      }
      // 會拿到 google profile 的超多資訊(id, name, emails, photos, provider...)
      /**
       *   id: '115983122816599400815',
       *   displayName: '黃八張',
       *   name: { familyName: '黃', givenName: '八張' },
       *   emails: [ { value: 'gfsddsafdas@gmail.com', verified: true } ],
       *   photos: [
       *    {
       *        value: 'https://lh3.googleusercontent.com/a/AEdFTp5b3nL9vgUBf_27ZgIPqWtVEJ47K0boZpsBHKsx=s96-c'
       *    }
       *   ],
       */
      // 第一次使用系統的使用者要把他的資料存進資料庫
    }
  )
);

/**
 * 順序
進入Google Strategy 的區域
使用者已經註冊過了，無需存入資料庫內
serialize 使用者 {
  _id: new ObjectId("6392e8843a946f298f1dbb38"),
  name: '黃八張',
  googleID: '115983122816599400815',
  thumbnail: 'https://lh3.googleusercontent.com/a/AEdFTp5b3nL9vgUBf_27ZgIPqWtVEJ47K0boZpsBHKsx=s96-c',
  email: 'gfsddsafdas@gmail.com',
  date: 2022-12-09T07:49:24.478Z,
  __v: 0
}
進入 redirect 區域
DeserializeUser
進入 /profile 區域
 */

/**
 * passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
 */

// https://www.passportjs.org/packages/passport-local/
passport.use(
  new LocalStrategy(async (username, password, done) => {
    let foundUser = await User.findOne({ email: username });
    if (foundUser) {
      // compare(使用者輸入的密碼, 資料庫的密碼)
      let result = await bcrypt.compare(password, foundUser.password);
      if (result) {
        done(null, foundUser);
        // OK 的話會傳到上面 serializeUser
      } else {
        done(null, false);
      }
    } else {
      // 若沒找到使用者
      done(null, false);
    }
  })
);
