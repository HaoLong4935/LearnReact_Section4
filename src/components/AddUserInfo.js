import React, { useState } from "react";

// class AddUserIfo extends React.Component {
//     //Nó dùng cú pháp JSX : Cho phép có thể viết code js bên trong code của html

//     //Định nghĩa state là một đối tượng có các thuộc tính
//     //State là thằng kiểm soát data của component , nên khi data thay đổi , render giao diện
//     //cũng sẽ thay đổi => Giao diện ĐỘNG
//     state = {
//         name: "Hao Long",
//         address: "Da Nang",
//         age: 26
//     };

//     handleOnChangeName = event => {
//         this.setState({
//             //event là sự kiện , target là sẽ đi đến phần tử HTML nào và lấy giá trị của nó là value
//             name: event.target.value
//         });
//     };

//     handleOnChangeAge = event => {
//         //Bad code
//         // This.state.age = event.target.age

//         //Good code
//         //Nên viết thế này
//         this.setState({
//             age: event.target.value
//         });
//     };

//     handleOnSubmit = event => {
//         event.preventDefault();
//         this.props.handleCreateUser({
//             id: Math.floor((Math.random() * 100) + 1),
//             name: this.state.name,
//             age: this.state.age,
//             address: this.state.address
//         });
//     };


//     render() {
//         return (
//             <div>
//                 <h1> My name is {this.state.name} and năm nay I'm {this.state.age} years old </h1>

//                 <form onSubmit={event => { this.handleOnSubmit(event); }}>
//                     <label>Your name: </label>
//                     <input type="text" value={this.state.name} onChange={event => { this.handleOnChangeName(event); }} />
//                     <br></br>
//                     <label>Your age: </label>
//                     <input type="number" value={this.state.age} onChange={event => { this.handleOnChangeAge(event); }} />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserIfo = (props) => {
    const [name, setName] = useState();
    const [address, setAdress] = useState();
    const [age, setAge] = useState();


    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleCreateUser({
            id: Math.floor((Math.random() * 100) + 1),
            name: name,
            age: age,
            address: address
        });
    }

    const handleOnChangeName = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    return (
        <div>
            <h1> My name is {name} and năm nay I'm {age} years old </h1>

            <form onSubmit={event => { handleOnSubmit(event); }}>
                <label>Your name: </label>
                <input type="text" value={name} onChange={event => { handleOnChangeName(event); }} />
                <br></br>
                <label>Your age: </label>
                <input type="number" value={age} onChange={event => { handleOnChangeAge(event); }} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserIfo