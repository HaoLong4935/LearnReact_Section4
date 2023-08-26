import React from "react";

class DisplayInfo extends React.Component {


    render() {
        //Có thể viết code javascrip trước từ return 

        //Xem giá trị của thằng cha (MyComponents) truyền sang thằng con
        console.log(this.props);

        //Cách khác để lấy các giá trị của thuộc tính , trường hợp các thuộc tính bên thằng cha nó nhiều
        const { name, age } = this.props;

        //Props : Viết tắt của properties 
        return (
            <div>
                <div>
                    My name is {name}
                </div>
                <div>
                    My age is {age}
                </div>
            </div>
        )
    }
}

export default DisplayInfo