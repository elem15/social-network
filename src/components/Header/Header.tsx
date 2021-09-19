import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {Avatar, Button, Col, Layout, Menu, Row, Typography, Space} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {
    selectCurrentUserId,
    selectCurrentUserLogin,
    selectIsAuth,


} from "../../redux/auth-selectors";
import {userSignOut} from "../../redux/auth-reducer";
import {profileIdSelect, profileSelect} from "../../redux/profile-selectors";
import {profileAPI} from "../../api/api";
import {ProfileType} from "../../Types/Types";


 type PropsType = {
       profile: ProfileType | null
 }

const Header: React.FC<PropsType> = ({profile}) => {

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)
    const ID = useSelector(selectCurrentUserId)
    const profileCurrent = useSelector(profileSelect)
    const profileId = useSelector(profileIdSelect)

    // const [profile, setProfile] = useState(profileCurrent)

    // useEffect(() => {
    //     const fetchData = async () => {
    //               const response = await profileAPI.getProfile(ID)
    //               setProfile(response)
    //         }
    //         fetchData()
    //     }, [] )
    console.log(profile)

    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(userSignOut())
    }

    const { Text } = Typography
    const {Header} = Layout

    const isPhoto = () => {
    if (profile?.photos !== null) return true
    else return false
}

    return (
        <Header className="header">
            <div className="logo"/>
            <Row>
                <Col span={12}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><Link to='/Users'>Developers</Link></Menu.Item>
                    </Menu>
                </Col>
                <Col span={12}> {
                    isAuth
                    ?
                   <Space direction="horizontal">
                       <Button onClick={logoutCallback}>Log out</Button>
                       <span> </span><span> </span><span> </span>
                       <Text type="success">{login}</Text>
                       {isPhoto()
                           ?
                           <Avatar
                               src={ profile?.photos.small } />
                           :
                           <Avatar alt={login || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>} />}
                   </Space>
                    :
                    <Link to={'/Login'}>Login</Link>
                }
                </Col>
            </Row>
        </Header>
    )
}

export default Header;