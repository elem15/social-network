import React, {useEffect, useState} from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileHead from './ProfileHead/ProfileHead';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Types/Types";
import {Col, Divider, Layout, Row} from "antd";
import Preloader from "../Common/Preloader/Preloader";

const {Content, Sider, Footer} = Layout

type OwnPropsType = {}
type MapStatePropsType = {
    isAuth: boolean
    profile: ProfileType | null
    status: string
    isFollowingProgress: Array<number>
    followed: boolean
    isOwner: boolean
    ownerOnHisPage: boolean
    initialization: boolean
    authId: number
}
type MapDispatchPropsType = {
    updateStatus: (status: string) => void
    savePhoto: (photoFile: any) => void
    updateProfile: (profile: ProfileType, userId: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    getStatus: (userId: number) => void
}

export type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType


const Profile: React.FC<PropsType> = (props) => {

    const [initialize, setInitialization] = useState(false)
    useEffect(() => {
        setTimeout(() => (setInitialization(true)), 1000)
    },[props.profile, props.status, props.isOwner])

    if (!props.initialization) {
        return <Preloader/>
    }

    if (!initialize) {
        return <Preloader/>
    }

    return (

        <Layout>
            <ProfileHead/>
            <Divider/>
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <Col className="gutter-row" xs={{span: 24, offset: 0}}
                     sm={{span: 22, offset: 2}}
                     xl={{span: 14, offset: 0}}>
                    <ProfileInfo profile={props.profile} follow={props.follow}
                                 status={props.status} updateStatus={props.updateStatus}
                                 isOwner={props.isOwner} savePhoto={props.savePhoto}
                                 updateProfile={props.updateProfile} followed={props.followed}
                                 isFollowingProgress={props.isFollowingProgress}
                                 unFollow={props.unFollow} isAuth={props.isAuth}
                                 ownerOnHisPage={props.ownerOnHisPage} authId={props.authId}
                                 getStatus={props.getStatus}
                    /></Col>
                <Col className="gutter-row" xs={{span: 24, offset: 0}}
                     sm={{span: 22, offset: 2}}
                     xl={{span: 8, offset: 1}}>
                    <MyPostsContainer/>
                </Col>
            </Row>
            <Divider></Divider>
        </Layout>

    )
}

export default Profile;