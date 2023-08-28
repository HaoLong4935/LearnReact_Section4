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


    render() {
        return (
            <div>
                <AddUserIfo handleCreateUser={this.handleCreateUser}></AddUserIfo>
                {/* Có thể viết như này, nhưng có cách viết DRY hơn */}
                {/* <DisplayInfo name="Hao Long" age={223}></DisplayInfo> */}

                <DisplayInfo
                    lisUsers={this.state.lisUsers}>
                </DisplayInfo>
            </div>
        );
    }
}

export default MyComponents;
