import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import arrow from '../../../assets/images/add.svg'
import ProfileUpdateWithHooks from "./ProfileUpdateWithHooks";

const ProfileInfo = (props) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    if (!props.profile) {
        return <Preloader/>
    }

    else {
        return (
            <div>
                <div className={s.descriptionBlock}>
                    <div className={s.fullName}>{props.profile.fullName}</div>
                    <div>
                        <img className={s.avatar} src={props.profile.photos.large || userPhoto}/>
                    </div>
                    {props.isOwner &&
                    <div class={s.inputWrapper}>
                    <input type={'file'} id={'input__file'} className={s.inputFile} onChange={onMainPhotoSelected}/>
                        <label htmlFor={"input__file"} className={s.inputFileButton}>
                        <span className={s.inputFileIconWrapper}>
                            <img className={s.inputFileIcon} src={arrow} width="25" />
                            </span>
                        <span className={s.inputFileButtonText}>Download your photo</span>
                        </label>
                    </div>}
                    <br/>
                    <ProfileStatusWithHooks userId={props.profile.userId} id={props.id}
                                   status={props.status} updateStatus={props.updateStatus}/>
                    <ProfileUpdateWithHooks profile={props.profile} id={props.id}
                                            updateProfile={props.updateProfile}
                    />

                    <div>About me: {props.profile.aboutMe}</div>
                    <div>Мой id: {props.profile.userId}</div>
                    <div>{props.profile.lookingForAJob ? <span>I have a job</span> : <span>I am looking for a job </span>}</div>
                    <div><a href="https://github.com">Мой GITHUB</a></div>
                    <div><br/> </div>
                    <div><br/>  </div>
                    <div>{ props.follow
                    ? <span>Subscribed {props.profile.fullName}</span>
                    : <span>You can subscribe on Users Page to {props.profile.fullName}</span> }
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;