import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserIfo from "./UserInfo";

class MyComponents extends React.Component {
    state = {
        lisUsers: [
            { id: 1, name: "Hao Long", age: 223 },
            { id: 2, name: "Long Pro", age: 23 },
            { id: 3, name: "Sieu nhan Hao", age: 30 }
        ]
    }

    render() {
        return (
            <div>
                <UserIfo></UserIfo>
                {/* Có thể viết như này, nhưng có cách viết DRY hơn */}
                {/* <DisplayInfo name="Hao Long" age={223}></DisplayInfo> */}

                <DisplayInfo lisUsers={this.state.lisUsers}></DisplayInfo>
            </div>
        );
    }
}

export default MyComponents;
