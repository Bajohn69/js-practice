function getData(name) {
  if (name == "Bajohn") {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: "Bajohn",
          age: Math.floor(Math.random() * 15),
          major: "CS",
        });
      }, 1000);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("not allowed to acess data"));
      }, 1000);
    });
  }
}

function getMovies(age) {
  if (age < 12) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ text: "cartoon movies" });
      }, 1500);
    });
  } else if (age < 18) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ text: "teen movies" });
      }, 1500);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("too old"));
      }, 1500);
    });
  }
}

getData("Bajohn")
  .then((obj) => {
    console.log(obj);
    return getMovies(obj.age);
  })
  // .then((obj) => getMovies(obj.age)) 也可以這樣寫
  .then((msg) => {
    console.log(msg.text);
  })
  .catch((e) => {
    console.log(e);
  });
