import React from "react";

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
                ? <button disabled={isFollowingProgress.some(id => id === userId)} onClick={() => {
                    unFollow(userId);
                }}>Unfollow</button>
                : <button disabled={isFollowingProgress.some(id => id === userId)} onClick={() => {
                    follow(userId);
                }}>Follow</button>
            }
        </div>
    )
}

export default Follow;