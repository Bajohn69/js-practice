const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");
// middlewares
app.use(express.static("public"));
mongoose.set("strictQuery", true);

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

const monkeySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
  },
});

const Monkey = mongoose.model("Monkey", monkeySchema);

// app.get("/", (req, res) => {
//   let newMonkey = new Monkey({
//     name: "Nelson",
//   });
//   newMonkey
//     .save()
//     .then(() => {
//       res.send("Data has been saved.");
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// });

// 要讓他接續下去才會被下面的 error handler 找到(要加 next())
// app.get("/", async (req, res) => {
//   let foundData = await Monkey.findOned({ name: "Nelson" });
//   res.send(foundData);
// });

// 處理一般程式碼的話就用下面 error handler 就好
// 但如果是在處理 async function 的 error 就要用這個 try&catch(記得放 next())
// app.get("/", async (req, res, next) => {
//   try {
//     let foundData = await Monkey.findOne({ name: "Nelson" });
//     res.send(foundData);
//   } catch (e) {
//     next(e);
//     // 把錯誤傳進 error handler
//   }
// });

// stack overflow
// Model.findOneAndUpdate(conditions, update, options, (error, doc) => {
//   // error: any errors that occurred
//   // doc: the document before updates are applied if `new: false`, or after updates if `new = true`
// });
app.get("/", async (req, res, next) => {
  try {
    await Monkey.findOneAndUpdate(
      { name: "Nelson4" },
      { name: "Nelson5" },
      {
        new: true,
        runValidators: true,
      },
      (err, doc) => {
        if (err) {
          res.send(err);
        } else {
          res.send(doc);
          // console.log(doc);
        }
      }
    );
  } catch (e) {
    next(e);
    // 把錯誤傳進 error handler
  }
});

// validator error has to be caught by .catch
// 一定要加 .catch
// app.get("/", async (req, res, next) => {
//   try {
//     let newMonkey = new Monkey({
//       name: "CJ",
//     });
//     newMonkey
//       .save()
//       .then(() => {
//         res.send("Data has been saved.");
//       })
//       .catch((err) => {
//         res.send(err);
//       });
//   } catch (e) {
//     next(e);
//     // 把錯誤傳進 error handler
//   }
// });

// app.get("/", (req, res) => {
//   res.send("Welcome to homepage.");
// });

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
