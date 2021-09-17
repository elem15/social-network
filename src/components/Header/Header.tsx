import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Avatar, Button, Col, Layout, Menu, Row, Typography, Space} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {PhotosType, ProfileType} from "../../Types/Types";
import userPhoto from "../../assets/images/user.png";


type PropsType = {
    isAuth: boolean,
    login: string | null,
    userSignOut: () => void,


}
const {Header} = Layout
const { Text } = Typography;
const _Header: React.FC<PropsType>  = (props) => {

//     const isPhoto = () => {
//     if (props.photos !== null) return true
//     else return false
// }
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
                    props.isAuth
                    ?
                   <Space direction="horizontal">
                       <Button onClick={props.userSignOut}>Log out</Button>
                       <span> </span><span> </span><span> </span>
                       <Text type="success">{props.login}</Text>
                       {
                           <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>} />}
                   </Space>
                    :
                    <NavLink to={'/Login'}>Login</NavLink>
                }
                </Col>
            </Row>
        </Header>
    )
}

export default _Header;