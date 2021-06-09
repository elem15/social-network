import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../../redux/dialog-reducer";
import DialogsItem from "./DialogItem";
import {name} from './DialogItemInside'
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newDialogState: state.dialogPage.newDialogState,
        dialogs: state.dialogPage.dialogs,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addDialog: () => {dispatch(addMessageActionCreator(name))},
        onPostChange: (text) => {dispatch(onMessageChangeActionCreator(text))}
    }
}

const DialogsItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsItem);

export default DialogsItemContainer;