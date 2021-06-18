import React from 'react';
import s from '../Dialogs.module.css';

const DialogState = (props) => {

    let addDialog = () => {
        props.addDialog(props.name);
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text);
    }

    return <div className={s.item + ' ' + s.active} >
        <div>
            <textarea onChange={onPostChange} value={props.newDialogState}/>
        </div>
        <div>
            <button onClick={addDialog}>Add post</button>
        </div>
    </div>
}

export default DialogState;