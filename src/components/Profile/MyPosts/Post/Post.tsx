import React from 'react';
import s from './Post.module.css'
import {Typography, Space, Row, Col} from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons'
const { Text, Link } = Typography;

type PropsType = {
    message: string
    likeCount: number
    disLikeCount: number
    likeIncrement: (id: number) => void
    disLikeIncrement: (id: number) => void
    id: number
}

const Post: React.FC<PropsType> = (props) => {
    const likeIncrement  = () => {
        return props.likeIncrement(props.id)
    }
    const disLikeIncrement  = () => {
        return props.disLikeIncrement(props.id)
    }
    return (                 
        <Row>
            <Col span={12}>
            <Text keyboard>{props.message} </Text>
            </Col>
            <Col span={3} offset={1}>
            <span className={`${s.item} ${s.active}`}>{props.likeCount} </span>
            <span> <LikeOutlined onClick={likeIncrement}/></span>
            </Col>
            <Col span={3} offset={1}>
            <span className={`${s.item} ${s.active}`}>{props.disLikeCount} </span>
            <span> <DislikeOutlined  onClick={disLikeIncrement}/></span>
            </Col>
        </Row>
    )
}

export default Post;