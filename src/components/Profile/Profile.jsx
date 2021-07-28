import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileHead from './ProfileHead/ProfileHead';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import Follow from "../Common/Follow/Follow";


const Profile = (props) => {

    return (
      <div> 
      <ProfileHead />
      <div className={s.main}>  
      <ProfileInfo profile={props.profile} follow={props.follow} id={props.id}
                   status={props.status} updateStatus={props.updateStatus}
                   isOwner={props.isOwner} savePhoto={props.savePhoto}
                   updateProfile={props.updateProfile} followed={props.followed} userId={props.id}
                   isFollowingProgress={props.isFollowingProgress}
                   unFollow={props.unFollow} users={props.users}
      />
      <MyPostsContainer  />
      </div>
    </div>
    )
}

export default Profile;