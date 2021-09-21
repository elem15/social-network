import React from 'react';
import s from './ProfileHead.module.css'
import image from './../../../assets/images/16-voshod.jpg'

import {Layout} from "antd";
const {Header} = Layout
type PropsType = {}

const ProfileHead: React.FC<PropsType> = React.memo(props => {

  return (

        <img className={s.top} src={image} />

  )
})

export default ProfileHead;