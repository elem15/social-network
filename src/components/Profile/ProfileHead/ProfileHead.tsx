import React from 'react';
import s from './ProfileHead.module.css'
import image from './../../../assets/images/16-voshod.jpg'

type PropsType = {}

const ProfileHead: React.FC<PropsType> = React.memo(props => {

  return (

        <img className={s.top} src={image} alt="profile"/>

  )
})

export default ProfileHead;