import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileHead from './ProfileHead/ProfileHead';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Types/Types";

type OwnPropsType = {
}
type MapStatePropsType = {
    isAuth: boolean
    profile: ProfileType | null
    status: string
    isFollowingProgress: Array<number>
    followed: boolean
    isOwner: boolean
}
type MapDispatchPropsType = {
    updateStatus: (status: string) => void
    savePhoto: (photoFile: any) => void
    updateProfile: (profile: ProfileType, userId: number ) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void

}

export type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

const Profile: React.FC<PropsType> = (props) => {

    return (
      <div> 
      <ProfileHead />
      <div className={s.main}>  
      <ProfileInfo profile={props.profile} follow={props.follow}
                   status={props.status} updateStatus={props.updateStatus}
                   isOwner={props.isOwner} savePhoto={props.savePhoto}
                   updateProfile={props.updateProfile} followed={props.followed}
                   isFollowingProgress={props.isFollowingProgress}
                   unFollow={props.unFollow}  isAuth={props.isAuth}
      />
      <MyPostsContainer  />
      </div>
    </div>
    )
}

export default Profile;