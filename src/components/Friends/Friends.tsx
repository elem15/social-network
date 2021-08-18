import React from 'react';
import s from './Friends.module.css'
import FriendsItem from "./FriendsItem/FriendsItem";
import {FriendsType} from "../../Types/Types";

type PropsType = {
   friends: Array<FriendsType>
}

const Friends: React.FC<PropsType> = (props) => {

    let friendsItems = props.friends.map(d => <FriendsItem key={d.id} name={d.name} src={d.src} />)

    return (
        <div className={s.dialogs}>

        <div>
          Friends:
        </div>

        <div className={s.dialogItems}>
            {friendsItems}
        </div>

    </div>
    )
}

export default Friends;