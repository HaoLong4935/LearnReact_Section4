import React, { useState } from "react";
import './DisplayInfo.scss'
import logo from './../logo.svg'

//Stateless vs stateful
// class DisplayInfo extends React.Component {
//     //File này đã bị xóa đi constructor -> Stateless 


//     render() {
//         //Có thể viết code javascrip trước từ return 

//         //Xem giá trị của thằng cha (MyComponents) truyền sang thằng con
//         console.log(this.props);

//         //Cách khác để lấy các giá trị của thuộc tính , trường hợp các thuộc tính bên thằng cha nó nhiều
//         const { lisUsers } = this.props;

//         //Props : Viết tắt của properties 
//         return (
//             <div className="DisplayInfo-block-container">
//                 <div>
//                     {true &&
//                         <>
//                             {lisUsers.map((user) => {
//                                 return (
//                                     <div key={user.id} className={user.age <= 18 ? "green" : "red"}>
//                                         <div>
//                                             <div>Ten toi la: {user.name}</div>
//                                             <div>Toi nam nay la: {user.age} tuoi</div>
//                                         </div>
//                                         <div>
//                                             <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                         </div>
//                                         <hr></hr>
//                                     </div>
//                                 )
//                             })}
//                         </>
//                     }
//                 </div>
//             </div>
//         )
//     }
// }


//Nếu là stateless thì ta có thể viết dưới dàng function như thế này 
//Và điều đặc biệt của function là props nó tự định nghĩa trong function , ta không cần dùng đến "this"
const DisplayInfo = (props) => {
    //Cách khác để lấy các giá trị của thuộc tính , trường hợp các thuộc tính bên thằng cha nó nhiều
    const { lisUsers } = props;

    const [isShowHideLU, setShowHideLU] = useState(true);
    const handleShowHideUser = () => {
        setShowHideLU(!isShowHideLU);
    }
    //Props : Viết tắt của properties
    return (
        <div className="DisplayInfo-block-container">
            <div>
                <span onClick={() => handleShowHideUser()}>
                    {isShowHideLU === true ? "Hide List User" : "Show list user"}</span>
            </div>
            <div>
                {isShowHideLU &&
                    <>
                        {lisUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age <= 18 ? "green" : "red"}>
                                    <div>
                                        <div>Ten toi la: {user.name}</div>
                                        <div>Toi nam nay la: {user.age} tuoi</div>
                                    </div>
                                    <div>
                                        <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
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

export default DisplayInfo