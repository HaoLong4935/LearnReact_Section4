import React from "react";
import './DisplayInfo.scss'
import logo from './../logo.svg'

class DisplayInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHideShow: true
        }
    }

    handleClick = () => {
        this.setState({
            isHideShow: !this.state.isHideShow
        })
    }

    render() {
        //Có thể viết code javascrip trước từ return 

        //Xem giá trị của thằng cha (MyComponents) truyền sang thằng con
        console.log(this.props);

        //Cách khác để lấy các giá trị của thuộc tính , trường hợp các thuộc tính bên thằng cha nó nhiều
        const { lisUsers } = this.props;

        //Props : Viết tắt của properties 
        return (
            <div className="DisplayInfo-block-container">
                <img src={logo} />
                <div>
                    <span onClick={() => { this.handleClick() }}> {this.state.isHideShow ? "Hide list users" : "Show list users"}</span>
                </div>
                <div>
                    {this.state.isHideShow &&
                        <>
                            {lisUsers.map((user) => {
                                return (
                                    <div key={user.id} className={user.age <= 18 ? "green" : "red"}>
                                        <div>
                                            <div>Ten toi la: {user.name}</div>
                                            <div>Toi nam nay la: {user.age} tuoi</div>
                                        </div>
                                        <div>
                                            <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
                                        </div>
                                        <hr></hr>
                                    </div>
                                )
                            })}
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default DisplayInfo