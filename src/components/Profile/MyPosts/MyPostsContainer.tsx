import {
    addPostActionCreator,
    disLikeIncrement,
    likeIncrement
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {PostsType} from "../../../Types/Types";
import {AppStateType} from "../../../redux/redux-store";

type OwnPropsType = {

}
type MapStatePropsType = {
   posts: Array<PostsType>
   newPostState: string
}
type MapDispatchPropsType = {
    addPost: (text: string) => void
    likeIncrement: (id: number) => void
    disLikeIncrement: (id: number) => void
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
        likeIncrement: (id: number) => {
            dispatch(likeIncrement(id))
        },
        disLikeIncrement: (id: number) => {
            dispatch(disLikeIncrement(id))
        }

    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, mapDispatchToProps)(MyPosts);