import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import arrow from '../../../assets/images/add.svg'
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataReduxForm from "./ProfileDataForm";
import Follow from "../../Common/Follow/Follow";

const ProfileInfo = (props) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const [editMode, setEditMode] = useState(false);

    const [followed, setFollow] = useState(props.followed);

    const follow = (userId) => {
        props.follow(userId);
        setFollow(true);
    }

    const unFollow = (userId) => {
        props.unFollow(userId);
        setFollow(false);
    }

    useEffect(() => {
        setFollow(props.followed)
    }, [props.followed])

    const submit = values => {
      props.updateProfile(values, props.profile.userId).then(() => {
          setEditMode(false);
      })
    }

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div className={s.descriptionBlock}>
                    <div className={s.fullName}>{props.profile.fullName}</div>
                    <ProfileStatusWithHooks userId={props.profile.userId} id={props.id}
                                            status={props.status} updateStatus={props.updateStatus}
                                            isOwner={props.isOwner} />
                                            <br/>
                    <div>
                        <img className={s.avatar} src={props.profile.photos.large || userPhoto}/>
                    </div>
                    {props.isOwner &&
                    <div class={s.inputWrapper}>
                        <input type={'file'} id={'input__file'} className={s.inputFile} onChange={onMainPhotoSelected}/>
                        <label htmlFor={"input__file"} className={s.inputFileButton}>
                        <span className={s.inputFileIconWrapper}>
                            <img className={s.inputFileIcon} src={arrow}/>
                            </span>
                            <span className={s.inputFileButtonText}>Download your photo</span>
                        </label>
                    </div>}
                    {props.isOwner && ! editMode &&
                    <button onClick={() => setEditMode(true)}>edit profile</button>}
                    {editMode
                            ?<ProfileDataReduxForm initialValues={props.profile}
                                                   profile={props.profile} onSubmit={submit}/>
                            :<ProfileData profile={props.profile} /> }
                    <div><br/></div>
                    <div><br/></div>
                    {!props.isOwner &&
                    <div>{followed
                        ? <span>Subscribed to {props.profile.fullName}</span>
                        : <span>You can subscribe to {props.profile.fullName}</span>}

                    <Follow followed={followed} userId={props.profile.userId}
                            isFollowingProgress={props.isFollowingProgress}
                            unFollow={unFollow} follow={follow}/></div>}
                </div>
            </div>
        )
    }
}

const ProfileData = (props) => {
    return (
        <div>
            <div>Full name: <i>{props.profile.fullName}.</i></div>
            <div>About me: <i>{props.profile.aboutMe}.</i></div>
            <div>{props.profile.lookingForAJob ? <span><i>I am looking for a job.</i></span> : <span><i>I have a job.</i></span>}</div>
            <div>My professional skills: <br/> <i>{props.profile.lookingForAJobDescription}.</i></div>
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