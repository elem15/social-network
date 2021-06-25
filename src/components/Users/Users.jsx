import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import Preloader from "../Common/Preloader/Preloader";
import {NavLink} from 'react-router-dom';
import {usersAPI} from "../../api/api";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.preload}> {props.isFetching ? <Preloader/> : null}</div>
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={styles.pointer}><span
                            className={props.currentPage === p && styles.selectedPage} onClick={() =>
                            props.onPageChanged(p)
                        }>{p}</span></span>
                    })}
                </div>
                <div>
                    {
                        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/Profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleIsFollowingProgress(true, u.id);
                            usersAPI.deleteUsers(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.unFollow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false, u.id);
                                })
                        }}>Unfollow</button>
                        : <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleIsFollowingProgress(true, u.id);
                            usersAPI.postUsers(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false, u.id);
                                })
                        }}>Follow</button>
                    }
                     </div>
            </span>
                            <span>
                 <span><div>{'u.location.city'}</div><div>{'u.location.country'}</div></span>
                <span><div>{u.name}</div><div>{u.status}</div></span>
            </span>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}
export default Users;