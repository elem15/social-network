import React from 'react';
import s from '../Dialogs.module.css';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../../redux/dialog-reducer";
import DialogItem from "./DialogItem";


const DialogItemContainer = (props) => {

    let addPost = () => {
        props.dispatch(addMessageActionCreator(props.name));
    };

    let onPostChange = (text) => {
        props.dispatch(onMessageChangeActionCreator(text));
    }

    return <div className={s.item + ' ' + s.active}>
        <DialogItem addPost={ addPost }
                    onPostChange={ onPostChange }
                    src={props.src}
                    newDialogState={props.newDialogState}
                    name={props.name} />
        <br/>
    </div>;
}

export default DialogItemContainer;