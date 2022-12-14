// index.js 的功能是將主要的 react component render 到 index.html 為 root 的標籤
import React from "react";
// 獲取 package 的方式(new) => const React = require('react')
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React.StrictMode 要在 react 裡面用嚴謹的語法(可刪)
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
