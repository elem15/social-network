import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {FriendsType} from "../../Types/Types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    friends: Array<FriendsType>
}
type MapDispatchPropsType = {
}
type OwnPropsType = {
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        friends: state.sidebar.friends,
    }
}

const mapDispatchToProps = () => {
    return {
        }
}

const FriendsContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;