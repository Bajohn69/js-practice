const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  role: {
    type: true,
    enum: ["student", "instructor"],
    required: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

// instance methods
userSchema.methods.isStudent = function () {
  return this.role == "student";
};

userSchema.methods.isInstructor = function () {
  return this.role == "instructor";
};

// mongoose middleware
// 若使用者為新用戶，或者是正在更改密碼，則將密碼進行雜湊處理
userSchema,
  pre("save", async function (next) {
    // 用 arrow function 會抓不到 this 是誰
    if (this.isNew || this.Modified("passwors")) {
      // 將密碼進行雜湊處理
    }
  });

const User = mongoose.model("User", userSchema);

module.exports = User;
