import React from 'react';
import s from '../Dialogs.module.css';

const DialogState = (props) => {

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text);
    }

    return <div>
        <div>
            <textarea name="input" onChange={onPostChange} value={props.newDialogState}/>
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
    </div>
}

export default DialogState;