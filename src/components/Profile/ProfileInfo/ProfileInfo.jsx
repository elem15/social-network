import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    else {
        return (
            <div>
                <div className={s.descriptionBlock}>
                    <div>
                        <img className={s.avatar} src={props.profile.photos.small !== null
                            ? props.profile.photos.small
                            : userPhoto}/>
                    </div>
                    <div>{props.profile.fullName}</div>
                    <div>Обо мне: {props.profile.aboutMe}</div>
                    <div>Мой id: {props.profile.userId}</div>
                    <div>{ props.follow
                    ? <span>Подписан</span>
                    : <span>Не подписан</span> }
                    </div>
                    <div>{props.profile.lookingForAJob ? <span>У меня есть работа!</span> : <span>Я ищу работу!</span>}</div>
                    <div><a href="https://github.com">Мой GITHUB</a></div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;