function hello() {
  console.log("hello");
}

// console.log(hello); // function 是 object

// bind, call, apply

let Bajohn = {
  name: "Bajohn",
  age: 28,
};

function getAge() {
  console.log(this.age);
}

getAge(); // undefined 因為現在的 this 是 window object

// bind 綁定
let getBajohnAge = getAge.bind(Bajohn);
getBajohnAge(); // 28 (Bajohn 被綁定了)

function getAge2(country, height) {
  console.log(this.age);
  console.log("I am from " + country + ". I am " + height + " cm.");
}
// call(執行) 比 bind 更實用，不用放進變數
getAge2.call(Bajohn, "Taiwan", 163);
getAge2.apply(Bajohn, ["Taiwan", 163]); // 跟 call 很像只是要用陣列保存參數
