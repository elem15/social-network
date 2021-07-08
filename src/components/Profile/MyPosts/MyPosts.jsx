import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

let PostForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <Field name="post" component="textarea" type="text" placeholder='Enter your message'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

PostForm  = reduxForm({form: 'post'})(PostForm)

const MyPosts = (props) => {

    const addPost = (post) => {
        return props.addPost(post)
    }
    const submit = (values) => {
        addPost(values.post);
    }
            return (
                <div className={s.items}>
                    My posts
                    <PostForm onSubmit={submit}/>
                    <h3>NEW POST</h3>
                    {props.posts.map(m => <Post message={m.message} likeCount={m.likeCount} />)}
                </div>
            )

    }

export default MyPosts;