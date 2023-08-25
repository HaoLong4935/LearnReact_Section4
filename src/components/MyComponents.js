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
    console.log("My name is", this.state.name);

    //Khái niệm MergeState => Thuộc về React Class
    //Nó đủ thông minh để biết giá trị nào thay đổi
    //Và giá trị nào cũ để giữ nguyên
    //Nên ta có 2 cách để thay đổi giá trị của đối tượng state

    //Cách 1: Ta viết gộp vào trong này , React nó tự hiểu
    this.setState({
      name: "ANH LONG VIP PRO",
      age: Math.floor(Math.random() * 100 + 1),
    });

    //Cách 2: Ta viết riêng lẻ ra
    // this.setState({
    //   age: Math.floor(Math.random() * 100 + 1),
    // });
  }

  mouseOnHover(event) {
    //Có những thuộc tính của event nên xem bên devtools
    console.log(event.target);
    console.log(event.pageX);
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>
          My name is {this.state.name} and năm nay I'm {this.state.age} years
          old
        </h1>
        <form onSubmit={(event) => { this.handleOnSubmit(event); }} >
          <input
            type="text" onChange={(event) => {
              this.handleOnChange(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );

    <h2></h2>;
  }
}

export default MyComponents;
