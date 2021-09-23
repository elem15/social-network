import React from 'react';
import s from '../Dialogs.module.css';
import MessageInside from "./MessageInside";
import {MessagesType} from "../../../Types/Types";

type PropsType = {
    messages: Array<MessagesType>
}

const Message: React.FC<PropsType> = (props) => {

    const messageItems = [...props.messages].reverse().map(m => <MessageInside message={m.message}
                                                              name={m.name}
                                                              st={m.st}
                                                              key={m.id}
    />)
    return (
        <div className={s.messages}>
            <div>{messageItems}</div>
        </div>
    )

}

export default Message;