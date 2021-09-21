import React from 'react';
import s from './Post.module.css'
import {Typography, Space, Row} from 'antd';
import { LikeOutlined } from '@ant-design/icons'
const { Text, Link } = Typography;

type PropsType = {
    message: string
    likeCount: number
}
const Post: React.FC<PropsType> = (props) => {
    return (                 
        <Row>
            <Text keyboard>{props.message} </Text>
            <span className={`${s.item} ${s.active}`}>{props.likeCount}
            <span> </span><span> </span><span> </span> <LikeOutlined /></span>
        </Row>
    )
}

export default Post;