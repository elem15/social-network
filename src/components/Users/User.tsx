import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from 'react-router-dom';
import Follow from "../Common/Follow/Follow";
import {UserType} from "../../Types/Types";

type PropsType = {
    user: UserType,
    isFollowingProgress: number[],
    isAuth: boolean
    unFollow: (userId: number) => void,
    follow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, isAuth, isFollowingProgress, unFollow, follow }) => {

    return (

        <div >
            <span>
                <div>
                    <NavLink to={'/Profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                {isAuth &&
                    <Follow followed={user.followed} userId={user.id}
                         isFollowingProgress={isFollowingProgress}
                         unFollow={unFollow} follow={follow}/>}
            </span>
            <span>
                <span><div>{'user.location.city'}</div><div>{'user.location.country'}</div></span>
                <span><div>{user.name}</div><div>{user.status}</div></span>
            </span>

            <hr/>
        </div>

    )
}
export default User;