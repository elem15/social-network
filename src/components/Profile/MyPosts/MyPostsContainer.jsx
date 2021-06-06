import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
        let state = props.store.getState();
        let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text));
    }

    return (
      <MyPosts updateNewPostText={ onPostChange }
               addPost={ addPost }
               posts={state.postPage.posts}
               newPostState={state.postPage.newPostState}
      />
    )
}

export default MyPostsContainer;