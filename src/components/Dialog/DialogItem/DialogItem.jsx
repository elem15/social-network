import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';       


const DialogItem = (props) => {

    let path = '/Dialogs/' + props.id;
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    }

    return <div className={s.item + ' ' + s.active}>
        <NavLink to={path}><img src={props.src}/>
            {props.name}</NavLink>
        <div>
            <textarea name="input" onChange={onPostChange} ref={newPostElement} value={props.newDialogState}/>
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>

        <br/>
    </div>;
}

export default DialogItem;