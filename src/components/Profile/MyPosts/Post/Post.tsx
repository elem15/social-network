import React, {useState} from 'react';
import s from './Post.module.css'
import {Typography, Space, Row, Col} from 'antd';
import { LikeOutlined, DislikeOutlined, LikeTwoTone, DislikeTwoTone  } from '@ant-design/icons'
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
    const [like, setLike] = useState(true)
    const likeIncrement  = () => {
        setLike(true)
        props.likeIncrement(props.id)
    }
    const disLikeIncrement  = () => {
        setLike(false)
        props.disLikeIncrement(props.id)
    }
    return (                 
        <Row>
            <Col span={14}>
            <Text keyboard>{props.message} </Text>
            </Col>
            <Col span={3} offset={1} className={s.position}>
            <span className={`${s.item} ${s.active}`}>{props.likeCount} </span>
            <span> {like
                ?
                <LikeTwoTone twoToneColor="#eb2f96"  onClick={likeIncrement}/>
                :
                <LikeTwoTone   onClick={likeIncrement}/>
            }
            </span>
            </Col>
            <Col span={4} offset={2}>
            <span>{!like
                ?
                <DislikeTwoTone twoToneColor="#eb2f96"  onClick={disLikeIncrement}/>
                :
                <DislikeTwoTone   onClick={disLikeIncrement}/>
            }
            <span className={`${s.item} ${s.active}`}>{props.disLikeCount} </span>
            </span>
            </Col>
        </Row>
    )
}

export default Post;