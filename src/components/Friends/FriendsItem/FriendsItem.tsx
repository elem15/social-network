import React from 'react';
import s from '../Friends.module.css';

type PropsType = {
    name: string,
    src: string | undefined
}
const FriendsItem: React.FC<PropsType> = (props) => {

    return <div className={s.item}>

        <div><img src={props.src} /></div>

            {props.name}

    </div>;
}

export default FriendsItem;