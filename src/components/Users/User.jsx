import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from 'react-router-dom';

const User = ({ user, isFollowingProgress, unFollow, follow }) => {

    return (

        <div >
            <span>
                <div>
                    <NavLink to={'/Profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={isFollowingProgress.some(id => id === user.id)} onClick={() => {
                            unFollow(user.id);
                        }}>Unfollow</button>
                        : <button disabled={isFollowingProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id);
                        }}>Follow</button>
                    }
                     </div>
            </span>
            <span>
                <span><div>{'user.location.city'}</div><div>{'user.location.country'}</div></span>
                <span><div>{user.name}</div><div>{user.status}</div></span>
                <span><div>Мой ID: {user.id}</div></span>
            </span>

            <hr/>
        </div>

    )
}

export default User;