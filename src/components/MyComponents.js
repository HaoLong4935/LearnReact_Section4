import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserIfo from "./UserInfo";

class MyComponents extends React.Component {


    render() {
        return (
            <div>
                <UserIfo></UserIfo>
                <DisplayInfo name="Hao Long" age={223}></DisplayInfo>
            </div>
        );
    }
}

export default MyComponents;
