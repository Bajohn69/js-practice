import React, { useState } from "react";

const Create = ({ messages, setMessages }) => {
  let [input, setInput] = useState("");
  //   let [messages, setMessages] = useState([]); // 貼到父層 component
  //   設定初始值
  const submitButtonHandler = (e) => {
    e.preventDefault();
    setMessages([...messages, input]); // spread operator
    setInput("");
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <form>
      <input onChange={inputHandler} type="text" value={input} />
      <button onClick={submitButtonHandler}>Submit</button>
    </form>
  );
};

export default Create;
