import React from "react";
import styles from "./Users.module.css";
import Preloader from "../Common/Preloader/Preloader";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../Types/Types";

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isAuth: boolean,
    onPageChanged: ((p: number) => void),
    isFollowingProgress: number[],
    unFollow: (userId: number) => void,
    follow: (userId: number) => void,
    isFetching: boolean,
    toggleIsFetching: ((isFetching: boolean) => void),
    users: Array<UserType>
}

const Users: React.FC<PropsType> = ({
                   totalUsersCount, pageSize, currentPage, onPageChanged,
                   isFollowingProgress, unFollow, follow,
                   isFetching, users, isAuth
               }) => {

    return (
        <div>
            <div> {isFetching ? <Preloader/> : null}</div>
            <div>
                <Paginator totalItemCount={totalUsersCount} pageSize={pageSize}
                           currentPage={currentPage} onPageChanged={onPageChanged}/>

                <div className={styles.users}>
                    {
                        users.map(u => <User key={u.id} user={u}
                                             isFollowingProgress={isFollowingProgress}
                                             unFollow={unFollow} follow={follow}
                                             isAuth={isAuth}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Users;