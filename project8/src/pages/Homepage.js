import React, { useState, useEffect } from "react";
import "../styles/style.css";
import Search from "../components/Search";
// import axios from "axios";
import axios from "axios";
// State Lifting
import Picture from "../components/Picture";

const Homepage = () => {
  // ----------------------- State Lifting ----------------------------------------
  // 把圖片做成 State，圖片的資訊先用 array 或 null 儲存
  let [data, setData] = useState([]);
  let [input, setInput] = useState("");
  let [page, setPage] = useState(1); // 預設第一頁
  let [currentSearch, setCurrentSearch] = useState(""); // 改善沒有按 search 就按 morePicture 的問題

  const auth = "563492ad6f91700001000001a653bf74cb1d4b56be1853a717e5b867";
  //   https://www.pexels.com/zh-tw/api/documentation
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15"; // ?page=1&per_page=15 一頁有 15 張照片
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
    setCurrentSearch(input); // 改善沒有按 search 就按 morePicture 的問題
    // console.log(result.data.photos);
    // axios 的 get request 要把 key 交出去的話，要在後面放物件 headers: { Authorization: auth }
  };

  const morePicture = async () => {
    // Closure Bug
    // console.log("目前的 page:", page);
    let newURL;
    setPage(page + 1);
    // console.log("setPage 後的 page:", page);

    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos)); // 把之前抓的照片合進來
  };

  useEffect(() => {
    search(initialURL);
  }, []);
  // search() 直接先搜尋一次

  return (
    <div className="Homepage">
      {/* search 要根據目前搜尋的對象改變值，執行 search 的時候會執行 () = >  */}
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {/* React Tips: Logical operator &&: 若第一個 data 為 null(false) 則不會進行後方的運算(因為 null 不能 map，會出現錯誤)，也可以在前面 useState([]) 就用 empty array */}
        {data && data.map((d) => <Picture data={d} key={d.id} />)}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>More Pictures</button>
      </div>
    </div>
  );
};

export default Homepage;
