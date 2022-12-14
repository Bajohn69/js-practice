// App.js 的功能是製作 App component(所有 component 的容器) 還有 route
// 右下角可更換語言 select language mode => react
// setting json 檔
/*
  設定
  "files.associations": {
    "*.js": "javascriptreact"
  }

  "[javascriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },

  */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import About from "./About";
import Page404 from "./Page404";
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Info from "./Info";
import Info2 from "./Info2";
import Create from "./Create";
import Car from "./Car";

function App() {
  // ------------------ Effect ------------------------------

  let [myName, setMyName] = useState("Leon");
  const buttonHandler = () => {
    setMyName("Lion");
  };

  useEffect(() => {
    console.log("useEffect function is execution");
  }, [myName]);
  // useEffect(function, [] (dependencies(array of states)))
  // if dependencies = empty array, 第一次 render 時會執行 useEffect 的 function 一次
  // if dependencies = [name], 第一次 render 時會執行 useEffect 的 function 一次，每當 name 這個 state 被更新時也會執行 useEffect 的 function 一次

  // ------------------ State ------------------------------

  let [messages, setMessages] = useState([]);
  // 可以給 Create 跟 Info2 做使用，用 props 傳遞

  // ------------------------------------------------

  // let friends = ["Wilson", "Alex", "Mike"];
  let friends = [
    { name: "Wilson", age: 16 },
    { name: "Alex", age: 17 },
    { name: "Bajohn", age: 20 },
  ];
  let myFriend1 = "Grace";

  const btnHandler = (msg) => {
    alert(msg);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="*" element={<Page404 />}></Route>
              {/* path="about" 會繼承，不用 / */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Car brand="toyota"></Car>
      <h1>{myName}</h1>
      <button onClick={buttonHandler}>change name</button>
      <Create messages={messages} setMessages={setMessages}></Create>
      <Info2 messages={messages} setMessages={setMessages}></Info2>
      <Nav />
      {/* 用 array.map() 的方式傳遞 properties，properties 會設定給每一個 component，每一個 component根據自己的 prop 顯示不同內容 */}
      {friends.map((friend) => (
        <Info name={friend.name} age={friend.age} />
      ))}
      {/* <Info name={friends[0]} age={16} />
      <Info name={friends[1]} age={17} />
      <Info name={friends[2]} age={18} /> */}
      {/* <Info name={myFriend1} />
      <Info name="Wilson" />
      <Info name="Alex" />
      <Info name="Mike" /> */}
      <button
        onClick={() => {
          btnHandler("good luck!");
        }}
      >
        Click!
      </button>
      {/* onClick={} 要 camelCase */}
      {/* {btnHandler(1)} 會直接執行 */}
      {/* onClick={() => {btnHandler(1);}} arrow function expression 就不會直接執行 */}
    </div>
  );
}
// 這些都是 jsx 語法，babel 會幫你轉換
// 在 jsx 裡面，每一個 function 都只能 return 一個東西，所以外面要包一個 div

export default App;

// 舊版 Class Component (State, Props)
// 新版 Functional Component (useState, useEffect, useHistory... (Hooks 在 class 無法起作用))
