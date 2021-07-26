import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import arrow from '../../../assets/images/add.svg'
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const [editMode, setEditMode] = useState(false);

    const  submit = values => {
      props.updateProfile(values, props.profile.userId);
      setEditMode(false)
    }

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div className={s.descriptionBlock}>
                    <div className={s.fullName}>{props.profile.fullName}</div>
                    <ProfileStatusWithHooks userId={props.profile.userId} id={props.id}
                                            status={props.status} updateStatus={props.updateStatus}/>
                                            <br/>
                    <div>
                        <img className={s.avatar} src={props.profile.photos.large || userPhoto}/>
                    </div>
                    {props.isOwner &&
                    <div class={s.inputWrapper}>
                        <input type={'file'} id={'input__file'} className={s.inputFile} onChange={onMainPhotoSelected}/>
                        <label htmlFor={"input__file"} className={s.inputFileButton}>
                        <span className={s.inputFileIconWrapper}>
                            <img className={s.inputFileIcon} src={arrow} width="25"/>
                            </span>
                            <span className={s.inputFileButtonText}>Download your photo</span>
                        </label>
                    </div>}
                    {props.isOwner &&
                    <button onClick={() => setEditMode(true)}>edit profile</button>}
                    <br/>{editMode
                            ?<ProfileDataReduxForm profile={props.profile} updateProfile={props.updateProfile}
                                            setEditMode={setEditMode} onSubmit={submit}/>
                            :<ProfileData profile={props.profile} /> }
                    <div><br/></div>
                    <div><br/></div>
                    {!props.isOwner &&
                    <div>{props.follow
                        ? <span>Subscribed {props.profile.fullName}</span>
                        : <span>You can subscribe on Users Page to {props.profile.fullName}</span>}
                    </div>}
                </div>
            </div>
        )
    }
}

const ProfileData = (props) => {
    return (
        <div>
            <div>Full name: <i>{props.profile.fullName}</i></div>
            <div>About me: <i>{props.profile.aboutMe}</i></div>
            <div>{props.profile.lookingForAJob ? <span><i>I am looking for a job </i></span> : <span><i>I have a job</i></span>}</div>
            <div>Looking for a job description: <i>{props.profile.lookingForAJobDescription}</i></div>
            <div>
                Contacts: {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key}
                                    contactValue={props.profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            {contactTitle}: <i>{contactValue}</i>
        </div>
    )
}

export default ProfileInfo;