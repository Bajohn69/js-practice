const express = require("express");
const app = express();
const ejs = require("ejs");

// middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  // database 拿到 an array of objects
  const languages = [
    { name: "python", rating: 9.5, popularity: 9.7, trending: "super hot" },
    { name: "Java", rating: 8.6, popularity: 8.2, trending: "same" },
    { name: "c++", rating: 6.6, popularity: 7.7, trending: "same" },
    { name: "php", rating: 2.5, popularity: 4.7, trending: "decreasing" },
    { name: "js", rating: 8.5, popularity: 8.1, trending: "same" },
  ];

  // res.send("This is homepage.");
  res.render("index.ejs", { languages });
  // 一定要把 ejs 放在 views 裡面
});

app.get("/response", (req, res) => {
  console.log(req.query); // { fullName: 'Bajohn', age: '28' }
  let { fullName, age } = req.query;
  // res.send("Thanks for sending request.");
  res.render("respond.ejs", { fullName, age });
});

app.get("/:name", (req, res) => {
  let { name } = req.params;
  // console.log({ name });
  res.render("person.ejs", { name: name });
  // render('ejs', object)
  // { name(1): name(2) } name(1) 的屬性是 name(2)
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
