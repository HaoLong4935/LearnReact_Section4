import "./App.scss";
//Đầu tiên để viết component thì phải khai báo react
import React from "react";
import Header from './components/Header/Header'

const App = () => {
  return (
    <div className="app-container">
      <Header></Header>
    </div>
  )
}

export default App;
