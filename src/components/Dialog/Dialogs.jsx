import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialog-reducer";
import DialogItemContainer from "./DialogItem/DialogItemContainer";

const Dialogs = (props) => {
    let state = props.store.getState();
    let dialogItems = state.dialogPage.dialogs.map(d => <DialogItemContainer
                                                         name={d.name}
                                                         id={d.id}
                                                         src={d.src}
                                                         dispatch={props.store.dispatch}
                                                         newDialogState={props.newDialogState}
    />)

    let messageItems = state.dialogPage.messages.map(m => <Message message={m.message}
                                                        name={m.name}
                                                        st={m.st}
                                                        newMessageState={m.newMessageState}
    />)



    let addPost = () => {
        props.store.dispatch(addMessageActionCreator(props.name));
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.store.dispatch(onMessageChangeActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
          <div className={s.dialogItems}>
            {dialogItems}
          </div> 
          <div className={s.messages}>
              <div>{messageItems}</div>
              <div>
                  <div>
                      <textarea name="input" onChange={onPostChange}  value={props.newDialogState}/>
                  </div>
                  <div>
                      <button onClick={addPost}>Add post</button>
                  </div>
              </div>
          </div>
        </div>      
    )
}

export default Dialogs;