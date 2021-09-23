import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogStateForm from "./DialogStateForm";
import {DialogsType} from "../../../Types/Types";

type PropsType = {
    dialogs: Array<DialogsType>,
    addMessage: (newMessageBody: string) => void
}

const DialogItem: React.FC<PropsType> = (props) => {
    return <div className={s.dialogContent}>
        <DialogStateForm addMessage={props.addMessage}/>
    </div>
}

export default DialogItem;