import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileHead from './ProfileHead/ProfileHead';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {
    return (
      <div> 
      <ProfileHead />
      <div className={s.main}>  
      <ProfileInfo />
      <MyPostsContainer  />
      </div>
    </div>
    )
}

export default Profile;