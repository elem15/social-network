import React from 'react';
import s from './Post.module.css'

type PropsType = {
    message: string
    likeCount: number
}
const Post: React.FC<PropsType> = (props) => {
    return (                 
        <div>
          <div className={s.item}>{props.message} </div>
          <div className={`${s.item} ${s.active}`}>Like Count: {props.likeCount}</div>
        </div>      
    )
}

export default Post;