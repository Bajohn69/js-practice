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

// async await try catch
async function showMovie() {
  try {
    const obj = await getData("Bajohn");
    // await: 等到 getData 獲得 data 之後再放進 obj 裡面
    const movie = await getMovies(obj.age);
    console.log(movie.text);
  } catch (e) {
    console.log(e);
  }
}

showMovie();

// getData("Bajohn")
//   .then((obj) => {
//     console.log(obj);
//     return getMovies(obj.age);
//   })
//   // .then((obj) => getMovies(obj.age)) 也可以這樣寫
//   .then((msg) => {
//     console.log(msg.text);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

/**
 * https://pjchender.dev/javascript/js-async-await/
 * await 會暫停 async function 的執行，
 * 等待 Promise 物件被 resolve 後再繼續 async function 的執行。
 * 同時回傳被 resolve 的值。
 *
 * async function 本身會回傳 Promise，
 * 因此 async function 之後也可以用 `.then()` 串起來
 **/

async function fetchProduct() {
  // 想除錯就放 try&catch
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );

    console.log("response: ", response);
    // async function 一定會 return 一個 Promise obj
    // 用了 await 就不是
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

fetchProduct();

// -----------------------------------------
// async function 一定會 return 一個 Promise obj

async function myFunction() {
  return 10;
}

let result = myFunction();

console.log(result); // Promise { fulfilles }

result.then((data) => {
  console.log(data); // 10 這裡才是 data 本人
});
