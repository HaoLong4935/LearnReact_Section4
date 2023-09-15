import "./App.scss";
//Đầu tiên để viết component thì phải khai báo react
import React from "react";
import Header from './components/Header/Header'
//Thư viện chuyển trang Link 
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">

      <div className="header-container">
        <Header></Header>
      </div>
      <div className="main-container">
        <div className="sidenav-container">

        </div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default App;
