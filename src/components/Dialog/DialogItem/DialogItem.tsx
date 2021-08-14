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
    return <div className={s.dialogContent}> {
        props.dialogs.map((d:DialogsType) => <div key={d.id}>

                <div className={s.item + ' ' + s.active}>
                    <NavLink to={'/Dialogs/' + d.id}><img src={d.src}/><br/>
                        {d.name}</NavLink>
                    <br/>
                </div>
            </div>
        )
    }
        <DialogStateForm addMessage={props.addMessage}/>
    </div>

}

export default DialogItem;