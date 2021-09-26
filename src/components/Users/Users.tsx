import React from "react";
import styles from "./Users.module.css";
import Preloader from "../Common/Preloader/Preloader";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../Types/Types";
import {Col, Row} from "antd";

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
    portionNumber: number
    setPortionNumber: (num: number) => void
}

const Users: React.FC<PropsType> = ({
                   totalUsersCount, pageSize, currentPage, onPageChanged,
                   isFollowingProgress, unFollow, follow,
                   isFetching, users, isAuth, portionNumber, setPortionNumber
               }) => {

    return (
        <div>
            <div> {isFetching ? <Preloader/> : null}</div>
            <div>
                <Paginator totalItemCount={totalUsersCount} pageSize={pageSize}
                           currentPage={currentPage} onPageChanged={onPageChanged}
                           portionNumber={portionNumber} setPortionNumber={setPortionNumber}
                />
                <Row>
                    {
                        users.map(u =>
                            <Col style={{margin: '10px 30px 10px 0'}} xs={{span: 24, offset: 0}} sm={{span: 14, offset: 2}}
                                 md={{span: 10, offset: 2}}
                                 lg={{span: 8, offset: 3}}
                                 xl={{span: 5, offset: 1}}
                                 xxl={{span: 4, offset: 2}}
                                 key={u.id}
                            >
                            <User  user={u}
                                   isFollowingProgress={isFollowingProgress}
                                   unFollow={unFollow} follow={follow} isAuth={isAuth}
                            />
                            </Col>
                        )
                    }
                </Row>
            </div>
        </div>
    );
}

export default Users;