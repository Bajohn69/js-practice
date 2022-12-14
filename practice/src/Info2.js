import React, { useState } from "react";
import "./styles/style.css";

const info2 = ({ messages, setMessages }) => {
  // 若要改變 component 裡某一個部分的話，需要 rerender 就要用 state(狀態)
  // react components 在其 props 或 state 改變時，都會重新渲染
  // let name = "Jade";
  let [name, setName] = useState("Jade");
  let age = 20;

  const changeNameHandler = () => {
    setName("Jade Wang");
    // name += "Wang";
  };
  return (
    <div className="info">
      {messages.map((messages, index) => {
        return <p key={index}>learn: {messages}</p>;
        // key 在瀏覽器上看不到
      })}
      <h1>friend's name: {name}</h1>
      <h1>friend's age: {age}</h1>
      <button onClick={changeNameHandler}>change name!</button>
    </div>
  );
};

export default info2;
