import React from "react";
import {Button} from "antd";

type PropsType = {
    followed: boolean,
    userId: number,
    isFollowingProgress: number[],
    unFollow: (userId: number) => void,
    follow: (userId: number) => void
}
const Follow: React.FC<PropsType> =
    ({ followed, userId, isFollowingProgress, unFollow, follow }) => {


    return (
        <div>
            {followed
                ? <Button disabled={isFollowingProgress.some(id => id === userId)} onClick={() => {
                    unFollow(userId);
                }}>Unfollow</Button>
                : <Button disabled={isFollowingProgress.some(id => id === userId)} onClick={() => {
                    follow(userId);
                }}>Follow</Button>
            }
        </div>
    )
}

export default Follow;