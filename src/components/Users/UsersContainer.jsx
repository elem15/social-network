import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unFollowAC, setUsersAC} from "../../redux/users-reducer";

const mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);