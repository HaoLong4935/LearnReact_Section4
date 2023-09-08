import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserIfo from "./AddUserInfo";

class MyComponents extends React.Component {
    state = {
        lisUsers: [
            { id: 1, name: "Hao Long", age: 223 },
            { id: 2, name: "Long Pro", age: 23 },
            { id: 3, name: "Sieu nhan Hao", age: 18 }
        ]
    }

    handleCreateUser = (userObj) => {
        this.setState(
            {
                lisUsers: [userObj, ...this.state.lisUsers]
            }
        )
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.lisUsers]
        console.log('THE CLONE IS: ', listUsersClone)
        listUsersClone = listUsersClone.filter((item) => {
            return item.id !== userId
        });
        this.setState(
            { lisUsers: listUsersClone }
        )
    }


    render() {
        return (
            <>
                <div className="a" >
                    <AddUserIfo handleCreateUser={this.handleCreateUser}></AddUserIfo>
                    {/* Có thể viết như này, nhưng có cách viết DRY hơn */}
                    {/* <DisplayInfo name="Hao Long" age={223}></DisplayInfo> */}

                    <DisplayInfo
                        lisUsers={this.state.lisUsers} handleDeleteUser={this.handleDeleteUser}>
                    </DisplayInfo>
                </div >

                <div className="b">

                </div>
            </>
        );
    }
}

export default MyComponents;
