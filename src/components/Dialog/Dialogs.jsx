import React from 'react';
import s from './Dialogs.module.css';
import DialogsItemContainer from "./DialogItem/DialogsItemContainer";
import MessageContainer from "./Message/MessageContainer";

const Dialogs = () => {
    return ( <div className={s.dialogs}>
                <DialogsItemContainer />
                <MessageContainer />
        </div>
    )

}

export default Dialogs;