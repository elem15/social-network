import React from 'react';
import s from '../Dialogs.module.css';
import {Typography, Space} from 'antd';

const {Text, Link} = Typography;
type PropsType = {
    message: string,
    name: string,
    st: string,
    key: number
}

const MessageInside: React.FC<PropsType> = (props) => {

    return (
        <div className={s.messages + ' ' + s[props.st]}>
            <div className={s.name}>{props.name}:</div>
            <span> {props.message} </span>
        </div>
    )
}

export default MessageInside;