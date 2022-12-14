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

import Nav from "./Nav";
import Info from "./Info";

function App() {
  // let friends = ["Wilson", "Alex", "Mike"];
  let friends = [
    { name: "Wilson", age: 16 },
    { name: "Alex", age: 17 },
    { name: "Bajohn", age: 20 },
  ];
  let myFriend1 = "Grace";

  return (
    <div>
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
    </div>
  );
}
// 這些都是 jsx 語法，babel 會幫你轉換
// 在 jsx 裡面，每一個 function 都只能 return 一個東西，所以外面要包一個 div

export default App;
