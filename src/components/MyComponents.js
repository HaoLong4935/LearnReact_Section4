import React from "react";

class MyComponents extends React.Component {
  //Nó dùng cú pháp JSX : Cho phép có thể viết code js bên trong code của html

  //Định nghĩa state là một đối tượng có các thuộc tính
  //State là thằng kiểm soát data của component , nên khi data thay đổi , render giao diện
  //cũng sẽ thay đổi => Giao diện ĐỘNG
  state = {
    name: "Hao Long",
    address: "Da Nang",
    age: 26,
  };
  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
      </div>
    );
  }
}

export default MyComponents;
