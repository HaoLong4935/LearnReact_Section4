import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponents from "./components/MyComponents";
//Đầu tiên để viết component thì phải khai báo react
import React from "react";

//Định nghĩa class App , nhớ là phải thừa kế
class App extends React.Component {
  //Dùng hàm render để xuất hình giao diện
  render() {
    return (
      <div className="app-container">
        <div>
          Hello la anh Long
          <MyComponents></MyComponents>
        </div>
      </div>
    );
  }
}

export default App;
