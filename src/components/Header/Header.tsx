import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Avatar, Button, Col, Layout, Menu, Row, Space, Typography} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {
    selectAuthProfile,
    selectCurrentUserId,
    selectCurrentUserLogin,
    selectIsAuth,
} from "../../redux/auth-selectors";
import {getUserProfile, userSignOut} from "../../redux/auth-reducer";

const {Content, Sider, Footer} = Layout
type PropsType = {

}

const Header: React.FC<PropsType> = () => {

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)
    const ID = useSelector(selectCurrentUserId)
    const profile = useSelector(selectAuthProfile)

    // const [profile, setProfile] = useState(profileInit)

    useEffect( () => {
        getUserProfileLocal(ID)
        }, [ID] )

    const dispatch = useDispatch()

    const getUserProfileLocal = (ID: number) => {
        dispatch(getUserProfile(ID))
    }

    const logoutCallback = () => {
        dispatch(userSignOut())
    }

    const { Text } = Typography
    const { Header } = Layout

    const header = <><Header className="header">

        <div className="logo"/>
        <Row>
            <Col xs={{span: 8, offset: 0}} sm={{span: 13, offset: 0}} md={{span: 16, offset: 0}} lg={{span: 19, offset: 0}}>

                <Menu theme="dark" mode="horizontal"  defaultSelectedKeys={['1']} inlineCollapsed={true}>
                    <Menu.Item key="1"><Link to='/Users'>Developers</Link></Menu.Item>
                </Menu>

            </Col>
            <Col xs={{span: 10, offset: 3}} sm={{span: 7, offset: 0}} md={{span: 5, offset: 0}} lg={{span: 3, offset: 0}}> {
                isAuth
                    ?
                    <Space direction="horizontal">
                        <Button onClick={logoutCallback}>Log out</Button>

                        <Text type="success"><Link to='/Profile'>{login}</Link></Text>
                        {
                            profile?.photos.small
                                ?
                                <Avatar
                                    src={profile?.photos.small}/>
                                :
                                <Avatar alt={login || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                        }
                    </Space>
                    :
                    <Button><Link to={'/Login'}>Login</Link></Button>
            }
            </Col>
        </Row>
    </Header></>;
    return header
}

export default Header;