import React from "react";

class UserIfo extends React.Component {
    //Nó dùng cú pháp JSX : Cho phép có thể viết code js bên trong code của html

    //Định nghĩa state là một đối tượng có các thuộc tính
    //State là thằng kiểm soát data của component , nên khi data thay đổi , render giao diện
    //cũng sẽ thay đổi => Giao diện ĐỘNG
    state = {
        name: "Hao Long",
        address: "Da Nang",
        age: 26
    };

    handleOnChangeName = event => {
        this.setState({
            //event là sự kiện , target là sẽ đi đến phần tử HTML nào và lấy giá trị của nó là value
            name: event.target.value
        });
    };

    handleOnChangeAge = event => {
        //Bad code
        // This.state.age = event.target.age

        //Good code
        //Nên viết thế này
        this.setState({
            age: event.target.value
        });
    };

    handleOnSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    };
    render() {
        return (
            <div>
                <h1> My name is {this.state.name} and năm nay I'm {this.state.age} years old </h1>

                <form onSubmit={event => { this.handleOnSubmit(event); }}>
                    <label>Your name: </label>
                    <input type="text" value={this.state.name} onChange={event => { this.handleOnChangeName(event); }} />
                    <br></br>
                    <label>Your age: </label>
                    <input type="number" value={this.state.age} onChange={event => { this.handleOnChangeAge(event); }} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserIfo