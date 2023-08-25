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

  handleClick(event) {
    console.log("I'm clicked");
  }

  mouseOnHover(event) {
    //Có những thuộc tính của event nên xem bên devtools
    console.log(event.target);
    console.log(event.pageX);
  }

  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        {/* Cần phải có từ khóa this , vì ta khai báo trong class nên cần tham chiếu đến phương thức đó bằng this */}
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseOver={this.mouseOnHover}>Mouse on me</button>
      </div>
    );
  }
}

export default MyComponents;
