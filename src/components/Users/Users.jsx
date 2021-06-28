import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import Preloader from "../Common/Preloader/Preloader";
import {NavLink} from 'react-router-dom';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div> {props.isFetching ? <Preloader/> : null}</div>
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
                            props.unFollow(u.id);
                        }}>Unfollow</button>
                        : <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id);
                        }}>Follow</button>
                    }
                     </div>
            </span>
                            <span>
                 <span><div>{'u.location.city'}</div><div>{'u.location.country'}</div></span>
                <span><div>{u.name}</div><div>{u.status}</div></span>
                <span><div>Мой ID: {u.id}</div></span>
            </span>
                                <div>  <hr/></div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default Users;