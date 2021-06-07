import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postInfo = props.posts.map(m => <Post message={m.message} likeCount={m.likeCount} />);


    let onAddPost = () => {
        props.addPost();
    };
/*через e.target*/
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
      <div className={s.items}>
        My posts
        <div>
          <textarea onChange={onPostChange}  value={props.newPostState}/>
        </div>
        <div>
          <button onClick={ onAddPost }>Add post</button>
        </div>
        <h3>NEW POST</h3>
        {postInfo}
      </div>          
    )
}

export default MyPosts;