import React from "react";

class DisplayInfo extends React.Component {


    render() {
        //Có thể viết code javascrip trước từ return 

        //Xem giá trị của thằng cha (MyComponents) truyền sang thằng con
        console.log(this.props);

        //Cách khác để lấy các giá trị của thuộc tính , trường hợp các thuộc tính bên thằng cha nó nhiều
        const { lisUsers } = this.props;

        //Props : Viết tắt của properties 
        return (
            <div>
                {lisUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <h5>Hello my name is: {user.name} </h5>
                            <h6>And my age is: {user.age}</h6>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfo