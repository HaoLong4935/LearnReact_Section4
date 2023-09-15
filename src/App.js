import "./App.scss";
//Đầu tiên để viết component thì phải khai báo react
import React from "react";
import Header from './components/Header/Header'
//Thư viện chuyển trang Link 
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header></Header>
      <div>TestLink</div>
      <button>
        <Link to="/user">Go to user</Link>
      </button>
      <button>
        <Link to="/admin">Go to admin</Link>
      </button>
    </div>
  )
}

export default App;
