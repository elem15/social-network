import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

let PostForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <Field name="post" component="input" type="text" placeholder='post'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

PostForm = reduxForm({form: 'post'})(PostForm)

class MyPosts extends React.Component {
    state = {
        posts: this.props.posts
    }
    submit = values => {
        this.props.addPost(values.post);
        this.setState({
            posts: this.props.posts
        })
    }

        render()
        {
            return (
                <div className={s.items}>
                    My posts
                    <PostForm onSubmit={this.submit}/>
                    <h3>NEW POST</h3>
                    {this.state.posts.map(m => <Post message={m.message} likeCount={m.likeCount} />)}
                </div>
            )
        }
    }

export default MyPosts;