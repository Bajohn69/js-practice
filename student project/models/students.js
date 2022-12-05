const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    default: 18,
    max: [80, "Too old in this school"],
  },
  scholarship: {
    merit: {
      type: Number,
      min: 0,
      max: [5000, "Toomuch merit scholarship"],
    },
    other: {
      type: Number,
      min: 0,
    },
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
// 之前都是輸出一整個物件 現在只要 exports 這個
