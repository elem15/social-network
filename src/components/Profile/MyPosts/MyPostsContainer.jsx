import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../redux/StoreContext";

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    store.dispatch(onPostChangeActionCreator(text));
                }

                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.postPage.posts}
                                newPostState={state.postPage.newPostState}/>
            }
        }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer;