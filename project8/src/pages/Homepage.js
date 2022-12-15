import React from "react";
import "../styles/style.css";
import Search from "../components/Search";
// import axios from "axios";

const Homepage = () => {
  const auth = "563492ad6f91700001000001a653bf74cb1d4b56be1853a717e5b867";
  return (
    <div className="Homepage">
      <Search />
    </div>
  );
};

export default Homepage;
