import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return {
        posts: state.postPage.posts,
        newPostState: state.postPage.newPostState,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);

