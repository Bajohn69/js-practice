import React from "react";
import "./styles/style.css";

const info = ({ name, age }) => {
  // 可不寫 props 直接寫 {name, age}
  // console.log(props); // { name: "Wilson" }
  const something = () => {
    return 100;
  };

  let friends = ["Wilson", "Alex", "Mike"];
  let trying = [1, 2, 3];

  return (
    // 因為 class 是保留字，所以要叫 className，react 會自動編譯
    // inline-styling style={{}} 外面的 {} 是 JSX expression 語法，裡面是 js 物件語法
    // 不能在 js 物件屬性使用 - 要用 camelCase
    <div className="info">
      <h1>props.name: {name}</h1>
      {/* <h1>props.name: {props.name}</h1> */}
      <h1>props.age: {age}</h1>
      {/* <h1>props.age: {props.age}</h1> */}
      <h1 style={{ color: "red" }}>這是 info 元件</h1>
      <h1 style={{ backgroundColor: "lightblue" }}>{5}</h1>
      <h1>{5 * 10}</h1>
      <h1>{Math.floor(Math.random() * 100)}</h1>
      <h1>{something()}</h1>
      <p>My friends:</p>
      {/* array.map 生成新的 array */}
      {/* react 會直接把 array 的 [] 去掉 */}
      {friends.map((friend) => {
        return <p>我ㄉ朋 {friend}</p>;
      })}
      {/* **** map 可以不用 return **** */}
      {friends.map((friend) => (
        <p>我ㄉ朋 {friend}</p>
      ))}
      <p>{trying}</p> {/* 123 */}
    </div>
  );
};

export default info;
