import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from 'react-router-dom';
import Follow from "../Common/Follow/Follow";
import {UserType} from "../../Types/Types";
import {Card, Col, Row} from "antd";

type PropsType = {
    user: UserType,
    isFollowingProgress: number[],
    isAuth: boolean
    unFollow: (userId: number) => void,
    follow: (userId: number) => void
}

const User: React.FC<PropsType> = ({user, isAuth, isFollowingProgress, unFollow, follow}) => {
    return (
        <Card title={user.name} extra={<NavLink to={'/Profile/' + user.id}>profile...</NavLink>}
              style={{width: 220, height: 185}}>
            <Row>
                <Col span={12}>
                    <NavLink to={'/Profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </NavLink>
                </Col>
                <Col span={12} style={{textAlign: 'center'}}>
                    {isAuth &&
                    <Follow followed={user.followed} userId={user.id}
                            isFollowingProgress={isFollowingProgress}
                            unFollow={unFollow} follow={follow}/>}
                    <div>{user.status}</div>
                </Col>
            </Row>
        </Card>

    )
}
export default User;