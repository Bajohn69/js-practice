const dotenv = require("dotenv");
const { urlencoded } = require("express");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/MernDB")
  .then(() => {
    console.log("Connecting to mongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());
app.use(express(urlencoded({ extended: true })));

// react default is port 3000 要錯開
app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});
