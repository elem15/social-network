import React from 'react';
import s from './Friends.module.css'
import FriendsItem from "./FriendsItem/FriendsItem";
import StoreContext from "../../redux/StoreContext";

const Friends = () => {
    return <StoreContext.Consumer>
        { (store) => {
            let state = store.getState();
    let friendsItems = state.sidebar.friends.map(d => <FriendsItem name={d.name} id={d.id} src={d.src} />)

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
        }
    </StoreContext.Consumer>
}

export default Friends;