import React from "react";
import axios from "axios";

const Search = () => {
  const auth = "563492ad6f91700001000001a653bf74cb1d4b56be1853a717e5b867";
  //   https://www.pexels.com/zh-tw/api/documentation
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15"; // ?page=1&per_page=15 一頁有 15 張照片

  const search = async () => {
    let result = await axios.get(initialURL, {
      headers: { Authorization: auth },
    });
    console.log(result);
    // axios 的 get request 要把 key 交出去的話，要在後面放物件
  };
  return (
    <div className="search">
      <input className="input" type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
