import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {DialogsType} from "../../Types/Types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    dialogs: Array<DialogsType>
}
type MapDispatchPropsType = {
}
type OwnPropsType = {
}
type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): PropsType =>{
    return {
        dialogs: state.dialogPage.dialogs,
    }
}

const mapDispatchToProps = () => {
    return {
    }
}

export const NavbarContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, mapDispatchToProps)(Navbar);