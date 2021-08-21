import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {PostsType, ProfileType, UserType} from "../../../Types/Types";
import {AppStateType} from "../../../redux/redux-store";

type OwnPropsType = {

}
type MapStatePropsType = {
   posts: Array<PostsType>
   newPostState: string
}
type MapDispatchPropsType = {
    addPost: (text: string) => void
}
export type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.postPage.posts,
        newPostState: state.postPage.newPostState,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        },
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, mapDispatchToProps)(MyPosts);

