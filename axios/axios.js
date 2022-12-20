// axios
// fetch(URL) 寄送一個 http requst 到一個 URL 裡面，return 一個 promise(裡面是 response object)

async function example1() {
  try {
    // fetch returns Promise object
    let responseObj = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    let data = await responseObj.json(); // .json() 才能提取文本裡面的資料出來
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

async function example2() {
  // axios.get() returns Promise object
  // Axios Response Object 跟 js 內建 responseObj 不一樣
  // Axios Response Object: https://zetcode.com/javascript/axios/#:~:text=created%20for%20convenience.-,Axios%20Response%20object,-When%20we%20send
  try {
    let axiosResponseObject = await axios.get(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );

    console.log(axiosResponseObject.data);
  } catch (e) {
    console.log(e);
  }

  // 不用 .json()
}

example1();
example2();
// 結果一樣但執行過程不一樣
