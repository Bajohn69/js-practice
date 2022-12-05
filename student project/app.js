const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Student = require("./models/students");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

mongoose
  .connect("mongodb://localhost:27017/studentDB")
  .then(() => {
    console.log("Successfully connected to mongoDB.");
  })
  .catch((e) => {
    console.log("Connection Failed.", e);
  });
app.get("/", (req, res) => {
  res.send("This is homepage.");
});

app.get("/students", async (req, res) => {
  // res.send("This is students page.");
  try {
    let data = await Student.find();
    res.render("students.ejs", { data });
  } catch (e) {
    console.log("Error with finding data.", e);
  }
});

app.get("/students/insert", (req, res) => {
  res.render("studentInsert.ejs");
});

app.post("/students/insert", (req, res) => {
  // 把需要的資訊從 req.body 提領出來
  let { id, name, age, merit, other } = req.body;
  let newStudent = new Student({
    id,
    name,
    age,
    scholarship: { merit, other },
  });
  newStudent
    .save()
    .then(() => {
      console.log("Student accepted.");
      res.render("accept.ejs");
    })
    .catch((e) => {
      console.log("Student not accepted.", e);
      res.render("reject.ejs");
    });

  // console.log(req.body);
  // res.send("Thanks for posting.");
});

app.get("/students/:id", async (req, res) => {
  // console.log(req.params);
  let { id } = req.params;
  try {
    let data = await Student.findOne({ id });
    console.log(data);
    // 由於 findOne() 會回傳 null 讓 catch 無效(沒有出現相對應的頁面)，所以要做下面的事
    if (data !== null) {
      res.render("studentPage.ejs", { data });
    } else {
      res.send("Cannot find this student. Please enter a valid id.");
      // 雖然會出現這一頁但 catch 還是有它存在的必要
    }
  } catch (e) {
    res.send("Error!", e);
  }
});

app.get("/*", (req, res) => {
  res.status(404);
  res.send("Not allowed.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
