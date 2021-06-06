import React from 'react';
import s from './Friends.module.css'
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {

    let friendsItems = props.friends.map(d => <FriendsItem name={d.name} id={d.id} src={d.src} />)

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