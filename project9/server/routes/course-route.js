const router = require("express").Router();
const Course = require("../models").course;
const courseValidation = require("../validation").courseValidation;

router.use((req, res, next) => {
  console.log("course route 正在接受一個 request");
  next();
});

router.post("/", async (req, res) => {
  let { error } = courseValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  if (req.user.isStudent()) {
    return res
      .status(400)
      .send("只有講師能發布新課程，若你已是講師，請透過講師帳號登入");
  }

  let { title, description, price } = req.body;
  try {
    let newCourse = new Course({
      title,
      description,
      price,
      instructor: req.user._id,
    });
    let savedCourse = await newCourse.save();
    return res.send(
      "課程創建成功"
      //   savedCourse,
    );
  } catch (e) {
    return res.status(500).send("無法創建課程");
  }
});

module.exports = router;
