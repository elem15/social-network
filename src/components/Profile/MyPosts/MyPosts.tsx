import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm, reset} from "redux-form";
import {renderField} from "../../Common/InputField/FormsControls";
import {maxLength33, required} from "../../../utils/validators";
import {PostsType} from "../../../Types/Types";

type PropsType = {
    handleSubmit: any

}
let PostForm: React.FC<PropsType> = ({ handleSubmit }) => {

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <Field name="post"
                       component={renderField }
                       label='Enter you message'
                       validate={[required, maxLength33]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const afterSubmit = (result: string, dispatch: any) =>
    dispatch(reset('post'));

const PostFormRedux  = reduxForm({form: 'post', onSubmitSuccess: afterSubmit})(PostForm)

type MyPostsType = {
    addPost: (text:string) => void
    posts: Array<PostsType>
}
const MyPosts: React.FC<MyPostsType> = props => {

    const addPost = (post:string) => {
        return props.addPost(post)
    }
    const submit = (values:any) => {
        addPost(values.post);
    }
            return (
                <div className={s.items}>
                    My posts
                    <PostFormRedux onSubmit={submit}/>
                    <h3>NEW POST</h3>
                    {[...props.posts].reverse().map(m => <Post message={m.message} likeCount={m.likeCount} key={m.id}/>)}
                </div>
            )
    }

export default MyPosts;