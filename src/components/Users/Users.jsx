import React from "react";
import styles from "./Users.module.css";
import Preloader from "../Common/Preloader/Preloader";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = ({
                   totalUsersCount, pageSize, currentPage, onPageChanged,
                   isFollowingProgress, unFollow, follow, isFetching, users
               }) => {

    return (
        <div>
            <div> {isFetching ? <Preloader/> : null}</div>
            <div>
                <Paginator totalItemCount={totalUsersCount} pageSize={pageSize}
                           currentPage={currentPage} onPageChanged={onPageChanged}/>

                <div className={styles.users}>
                    {
                        users.map(u => <User key={u.id} user={u} isFollowingProgress={isFollowingProgress}
                                                   unFollow={unFollow} follow={follow}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Users;