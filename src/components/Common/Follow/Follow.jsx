import React, {useState} from "react";

const Follow = ({ followed, userId, isFollowingProgress, unFollow, follow }) => {


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