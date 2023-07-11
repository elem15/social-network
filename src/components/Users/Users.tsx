import React, {useState} from "react";
import Preloader from "../Common/Preloader/Preloader";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../Types/Types";
import {Button, Col, Input, Row, Switch} from "antd";

const {Search} = Input;

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isAuth: boolean,
    isFollowingProgress: number[],
    isFetching: boolean,
    users: Array<UserType>
    portionNumber: number
    isFriends: boolean | null
    onPageChanged: ((p: number) => void),
    onSearchUserPageChanged: ((p: number, isFriends: boolean | null, searchUser: string) => void),
    unFollow: (userId: number) => void,
    follow: (userId: number) => void,
    toggleIsFetching: ((isFetching: boolean) => void),
    setPortionNumber: (portionNumber: number) => void
    setIsFriends: ((isFriends: boolean | null) => void)
    setSearchUser: ((searchUser: string) => void)
}


const Users: React.FC<PropsType> = ({
                                        totalUsersCount, pageSize, currentPage, onPageChanged,
                                        isFollowingProgress, unFollow, follow,
                                        isFetching, users, isAuth, portionNumber, setPortionNumber,
                                        setIsFriends, setSearchUser, onSearchUserPageChanged, isFriends
                                    }) => {
    const setFriendsOnly = (isFriends: boolean | null) => {
        setSearchUser('')
        setIsFriends(isFriends)
        onSearchUserPageChanged(1, isFriends, '')
    }

    const onSearch = (searchUser: string) => {
        setSearchUser(searchUser)
        onSearchUserPageChanged(1, check, searchUser)
    }
    const [check, setCheck] = useState(null)

    function onChange(checked: any) {
        if (!checked) checked = null
        setCheck(checked)
    }

    return (
        <div>
            <div> {isFetching ? <Preloader/> : null}</div>
            <Row>
                <Col style={{margin: '10px 30px 10px 0'}} xs={{span: 24, offset: 0}} sm={{span: 15, offset: 0}}>
                    {isFriends === null &&
                    <Button type="primary" onClick={() => setFriendsOnly(true)}>click to show only friends</Button>}
                    {isFriends &&
                    <Button type="dashed" onClick={() => setFriendsOnly(false)}>click to show everyone except friends</Button>}
                    {isFriends === false &&
                    <Button onClick={() => setFriendsOnly(null)}>click to show all users</Button>}

                    <Paginator totalItemCount={totalUsersCount} pageSize={pageSize}
                               currentPage={currentPage} onPageChanged={onPageChanged}
                               portionNumber={portionNumber} setPortionNumber={setPortionNumber}
                    /></Col>
                <Col style={{margin: '10px 30px 10px 0'}} xs={{span: 24, offset: 0}} sm={{span: 7, offset: 0}}>
                    <Search placeholder="Search user" onSearch={onSearch} enterButton style={{maxWidth: '300px'}}/>
                    <br/>
                    <Switch onChange={onChange}/> Only friends
                </Col>
            </Row>

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
                            <User user={u}
                                  isFollowingProgress={isFollowingProgress}
                                  unFollow={unFollow} follow={follow} isAuth={isAuth}
                            />
                        </Col>
                    )
                }
            </Row>

        </div>
    );
}

export default Users;