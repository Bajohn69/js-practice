import React, { useState } from "react";
// import axios from "axios";

const Search = ({ search, setInput }) => {
  // ----------------------- State Lifting 去 Homepage ----------------------------------------
  // // 把圖片做成 State，圖片的資訊用 array/null 儲存
  // let [data, setData] = useState(null);

  // const auth = "563492ad6f91700001000001a653bf74cb1d4b56be1853a717e5b867";
  // //   https://www.pexels.com/zh-tw/api/documentation
  // const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15"; // ?page=1&per_page=15 一頁有 15 張照片

  // const search = async () => {
  //   let result = await axios.get(initialURL, {
  //     headers: { Authorization: auth },
  //   });
  //   setData(result.data.photos);
  //   console.log(result.data.photos);
  //   // axios 的 get request 要把 key 交出去的話，要在後面放物件 headers: { Authorization: auth }
  // };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input className="input" onChange={inputHandler} type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
