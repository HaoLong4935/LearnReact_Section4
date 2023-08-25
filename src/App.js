import logo from "./logo.svg";
import "./App.css";
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
      <div>
        <div>
          Hello la anh Long
          <MyComponents></MyComponents>
        </div>
      </div>
    );
  }
}

// const App = () => {
//   return (

//   );
// }

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hảo Long best yasua
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
