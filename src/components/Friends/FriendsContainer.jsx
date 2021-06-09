import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";


// const FriendsContainer = () => {
//
//
//     let friendsItems = state.sidebar.friends.map(d => <FriendsItem name={d.name} id={d.id} src={d.src} />)
//
//     return (
//         <div className={s.dialogs}>
//
//         <div>
//           Friends:
//         </div>
//
//         <div className={s.dialogItems}>
//             {friendsItems}
//         </div>
//
//     </div>
//     )
//
// }

const mapStateToProps = (state) =>{
    return {
        sidebar: state.sidebar,
    }
}

const mapDispatchToProps = () => {
    return {
        }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;