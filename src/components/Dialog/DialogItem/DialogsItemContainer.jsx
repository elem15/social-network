import React from 'react';
import {addMessageActionCreator} from "../../../redux/dialog-reducer";
import DialogsItem from "./DialogItem";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newDialogState: state.dialogPage.newDialogState,
        dialogs: state.dialogPage.dialogs,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addDialog: (name, newMessageBody) => {dispatch(addMessageActionCreator(name, newMessageBody))},
    }
}

const DialogsItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsItem);

export default DialogsItemContainer;