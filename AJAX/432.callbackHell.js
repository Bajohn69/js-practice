function getData(name, callback) {
  setTimeout(() => {
    callback({ name: name, age: Math.floor(Math.random() * 15), major: "CS" });
  }, 2000);
}

function getMovies(age, callback) {
  if (age < 12) {
    setTimeout(() => {
      callback("cartoon movies");
    }, 1500);
  } else if (age < 18) {
    setTimeout(() => {
      callback("teen movies");
    }, 1500);
  } else {
    setTimeout(() => {
      callback("adult movies");
    }, 1500);
  }
}

getData("Bajohn", (obj) => {
  console.log(obj);
  getMovies(obj.age, (str) => {
    console.log(str);
  });
});
// 避免無止境的 callback 下去所以有 ajax
