import React from 'react';
import s from '../Friends.module.css';

const FriendsItem = (props) => {

    return <div className={s.item}>

        <div><img src={props.src} /></div>

            {props.name}

    </div>;
}

export default FriendsItem;