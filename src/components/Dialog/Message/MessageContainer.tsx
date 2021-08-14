import React from 'react';

import Message from "./Message";

import {connect} from "react-redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import {MessagesType} from "../../../Types/Types";

type MapStatePropsType = {
    messages: Array<MessagesType>,
}
type MapDispatchPropsType = {

}
type OwnPropsType = {
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messages: state.dialogPage.messages
    }
}
let mapDispatchToProps = () => {
    return {
    }
}

const MessageContainer = compose(withAuthRedirect,
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, mapDispatchToProps)
    )(Message);
export default MessageContainer