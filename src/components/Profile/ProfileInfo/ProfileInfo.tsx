import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import arrow from '../../../assets/images/add.svg'
import ProfileDataFormRedux from "./ProfileDataForm";
import Follow from "../../Common/Follow/Follow";
import {ProfileType, UserType} from "../../../Types/Types";
import {Col, Row, Typography, Image, Button, Space, Divider} from "antd";
const { Title, Text } = Typography


type OwnPropsType = {}
type MapStatePropsType = {
    isAuth: boolean
    profile: ProfileType | null
    status: string
    isFollowingProgress: Array<number>
    followed: boolean
    isOwner: boolean
    ownerOnHisPage: boolean
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

const ProfileInfo: React.FC<PropsType> = (props) => {
    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const [editMode, setEditMode] = useState(false);

    const [followed, setFollow] = useState(props.followed);

    const follow = (userId: number) => {
        props.follow(userId);
        setFollow(true);
    }

    const unFollow = (userId: number) => {
        props.unFollow(userId);
        setFollow(false);
    }

    useEffect(() => {
        setFollow(props.followed)
    }, [props.followed])

    const submit = (values: any) => {
        // @ts-ignore
        props.updateProfile(values, props.profile.userId).then(() => {
            setEditMode(false);
        })
    }

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32  }}>

                <Col className="gutter-row" xs={{span: 24, offset: 0}} sm={{span: 9, offset: 1}} md={{ span: 10, offset: 0 }}>
                    <Title level={2}>{props.profile.fullName}</Title>
                    <ProfileStatusWithHooks userId={props.profile.userId} authId={props.authId}
                                            status={props.status} updateStatus={props.updateStatus}
                                            isOwner={props.isOwner} isAuth={props.isAuth}
                                            getStatus={props.getStatus}/>
                        <Image width={170} style={{borderRadius: '3px'}} src={props.profile.photos.large || userPhoto}/>
                    {props.isOwner && props.isAuth &&
                    <div className={s.inputWrapper}>
                        <input type={'file'} id={'input__file'} className={s.inputFile} onChange={onMainPhotoSelected}/>
                        <label htmlFor={"input__file"} className={s.inputFileButton}>
                        <span className={s.inputFileIconWrapper}>
                            <img className={s.inputFileIcon} src={arrow}/>
                            </span>
                            <span className={s.inputFileButtonText}>Download your photo</span>
                        </label>
                    </div>} <div><br/></div>
                </Col>

                <Col className="gutter-row" xs={{span: 24, offset: 0}} sm={{span: 12, offset: 2}} md={{ span: 10, offset: 1 }}>
                    <Title level={3}>Profile</Title>

                    {props.isOwner && !editMode && props.isAuth &&
                    <><Button onClick={() => setEditMode(true)}>edit profile</Button><Divider/></>}

                    {editMode
                        ? <ProfileDataFormRedux onSubmit={submit} initialValues={props.profile}/>
                        : <ProfileData profile={props.profile}/>}
                    <div><br/></div>

                    {(!props.isOwner && !props.ownerOnHisPage) &&
                    <div>{followed
                        ? <div>Subscribed to {props.profile.fullName}</div>
                        : <div>You can subscribe to {props.profile.fullName}</div>}

                        <Follow followed={followed} userId={props.profile.userId}
                                isFollowingProgress={props.isFollowingProgress}
                                unFollow={unFollow} follow={follow}/>
                    </div>}
                    <div><br/></div>
                </Col>

            </Row>
        )
    }
}

type ProfileDataType = {
    profile: ProfileType
}

const ProfileData: React.FC<ProfileDataType> = (props) => {
    return (
        <Space direction="vertical">
            <Text><b>Full name:</b> <i>{props.profile.fullName}</i></Text>
            <Text><b>About me:</b> <i>{props.profile.aboutMe}</i></Text>
            <Text>{props.profile.lookingForAJob ? <span><i>I am looking for a job</i></span> :
                <span><i>I have a job</i></span>}</Text>
            <Text><b>My professional skills:</b> <i>{props.profile.lookingForAJobDescription}</i></Text>
            <Text>
                Contacts: {Object.keys(props.profile.contacts).map((key: string) => {
                return <Contact key={key} contactTitle={key}
                                contactValue={props.profile.contacts[key]}/>
            })}
            </Text>
        </Space>
    )
}

type ContactType = {
    contactTitle: string
    contactValue: string
}
const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <span className={s.contactTitle} >{contactTitle}</span>: <i>{contactValue}</i>
        </div>
    )
}

export default ProfileInfo;