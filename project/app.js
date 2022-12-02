const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const fs = require("fs");

// connect to mongoDB
// https://mongoosejs.com/ 複製前兩行
mongoose
  .connect("mongodb://localhost:27017/test")
  //   連接成功的話
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  //   連接失敗的話
  .catch((err) => {
    console.log("Connection Failed.");
    console.log(err);
  });

//   https://mongoosejs.com/docs/api/model.html

// define a schema
// Schema 要大寫
// const studentSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   major: String,
//   scholarship: {
//     merit: Number,
//     other: Number,
//   },
// });
// 另一種寫法 Validators Valid(adj.) 有效的
// 1.required 2.default 所有 schema type 都通用(每個 schema 都有不同的 option)
// required 也可以寫 function
// validation
// https://mongoosejs.com/docs/validation.html#built-in-validators
// schematypes
// https://mongoosejs.com/docs/schematypes.html
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You forgot to enter the name of this student."],
    // required:[boolean, 'error msg']
    maxlength: [15, "Name is too long."],
  },
  age: { type: Number, required: true, max: 100, default: 18 },
  major: {
    type: String,
    enum: ["EE", "Computer Science", "Chem", "Law", "undecided"],
    // enum 枚舉/列舉 沒有出現這幾項就會 error
    default: "undecided",
  },
  scholarship: {
    merit: {
      type: Number,
      min: [0, "Are you trying to enter negative numbers?"],
      max: 5000,
      default: 0,
    },
    other: {
      type: Number,
      min: [0, "Are you trying to enter negative numbers?"],
      default: 0,
    },
  },
});

// create an instance method
studentSchema.methods.totalScholarship = function () {
  // 注意!! 若使用 arrow function, this 會是 window obj, console.log => empty obj {}
  // console.log(this);
  return this.scholarship.merit + this.scholarship.other;
};

studentSchema.methods.addAge = function () {
  this.age++;
  this.save();
};

// static method not belongs to the schema
// static method 屬於 model 不屬於 schema(但長很像)
studentSchema.statics.setOtherToZero = function () {
  return this.updateMany({}, { "scholarship.other": 0 });
  // {} 表示所有學生
};

// define middleware
// 若有新的使用者註冊，伺服器端會知道
// 註冊之前
studentSchema.pre("save", async function () {
  fs.writeFile("record.txt", "One data is trying to be saved", (e) => {
    if (e) throw e;
  });
});
// 註冊之後
studentSchema.post("save", async function () {
  fs.writeFile("record.txt", "One data has been saved", (e) => {
    if (e) throw e;
  });
});

// create a model for students
// model = collection = table
// Student 一定要大寫、單數
const Student = mongoose.model("Student", studentSchema);

const newStudent = new Student({
  name: "Zach",
  age: 28,
  major: "Chem",
  scholarship: {
    merit: 2000,
    other: 0,
  },
});

newStudent
  .save()
  .then(() => {
    console.log("saved");
  })
  .catch((e) => {
    console.log("not saved", e);
    // 會覆寫 record.txt 檔
    fs.writeFile("record.txt", "Data is not saved", (e) => {
      if (e) throw e;
    });
  });

// Student.setOtherToZero()
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// 另一種 findOneAndUpdate
// Student.findOne({ name: "Grace" })
//   .then((data) => {
//     data.addAge();
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// 列出所有人的 total scholarship
// Student.find({})
//   .then((data) => {
//     data.forEach((oneStudent) => {
//       console.log(
//         `${
//           oneStudent.name
//         } has total scholarship ${oneStudent.totalScholarship()}.`
//       );
//     });
//   })
//   .catch((e) => {
//     console.log("error!!!!!!");
//     console.log(e);
//   });

// 因為 find() 一定會回傳 array 但這個 function 不會回傳 array，所以要用 findOne()
// Student.findOne({})
// .then((data) => {
//   let result = data.totalScholarship();
//   console.log(result);
// })
// .catch((e) => {
//   console.log("error!!!!!!!");
//   console.log(e);
// });

// Student.findOneAndUpdate(
//   { name: "Grace" },
//   { "scholarship.merit": 3500 },
//   { new: true, runValidators: true } // 這邊要再確認一次，不然會有問題 runValidators: true
// )
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((e) => {
//     console.log("Update Failed.");
//     console.log(e);
//   });

// const newStudent = new Student({
//   // required 的項目沒打就會出現 error
//   name: "Grace",
//   age: 26,
//   major: "Law",
//   scholarship: {
//     merit: 2500, // type: Number 不會強制，他會幫你轉(文字就會出現 error)
//     other: 1500,
//   },
// });

// const newStudent = new Student({
//   // required 的項目沒打就會出現 error
//   name: "Nelson",
//   age: 18,
//   scholarship: {
//     merit: "1500", // type: Number 不會強制，他會幫你轉(文字就會出現 error)
//     other: "2000",
//   },
//   isMarried: true, // 不在 schema 上的東西就不會出現
// });

// newStudent
//   .save()
//   .then(() => {
//     console.log("Data has been saved.");
//   })
//   .catch((e) => {
//     console.log("error has happened.");
//     console.log(e);
//   });

// delete and update
// Student.findOneAndDelete({ "scholarship.merit": { $gte: 2000 } }).then(
//   (msg) => {
//     console.log(msg);
//   }
// );

// delete
// Student.deleteOne({ "scholarship.merit": { $gte: 2000 } }).then((msg) => {
//   console.log(msg);
// });

// findOneAndUpdate 找到且印出更新版不用一直 find
// {new: true} 印出新的(預設是 false)
// https://mongoosejs.com/docs/api/model.html#model_Model-findOneAndUpdate
// Student.findOneAndUpdate({ name: "Carl" }, { name: "Ben" }, { new: true }).then(
//   (msg) => {
//     console.log(msg);
//   }
// );

// updateMany
// Student.updateMany({ major: "EE" }, { major: "Chem" }).then((msg) => {
//   console.log(msg);
// });

// update
// Student.updateOne({ name: "John" }, { name: "Carl" }).then((msg) => {
//   console.log(msg);
// });

// find 條件
// $gte 大於等於
// Student.find({ "scholarship.merit": { $gte: 1500 } }).then((data) => {
//   console.log(data);
// });

// find object in students (find() 會回傳 array)
// -----------------------------------------------------------

// Student.find({}).then((data) => {
//   console.log(data);
// });

// -----------------------------------------------------------

// findOne() 找到第一個符合條件ㄉ資料(obj)
// Student.find({ name: "John" }).then((data) => {
//   console.log(data);
// });

// create an object
// const John = new Student({
//   name: "John",
//   age: 25,
//   major: "EE",
//   scholarship: {
//     merit: 2500,
//     other: 1300,
//   },
// });

// **mongoose 的 insertOne() 就是 save()
// save John to DB
// John.save()
//   .then(() => {
//     console.log("John has been saved into DB.");
//   })
//   .catch((e) => {
//     console.log("error happened.");
//     console.log(e);
//   });

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
