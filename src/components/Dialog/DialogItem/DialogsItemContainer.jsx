import React from 'react';
import s from '../Dialogs.module.css';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../../redux/dialog-reducer";
import StoreContext from "../../../redux/StoreContext";
import DialogsItem, {name} from "./DialogItem";
import DialogState from "./DialogState";

const DialogsItemContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let addPost = () => {
                store.dispatch(addMessageActionCreator(name));
            };

            let onPostChange = (text) => {
                store.dispatch(onMessageChangeActionCreator(text));
            }
            let state = store.getState();
            let dialogItems = state.dialogPage.dialogs.map(d => <DialogsItem
                name={d.name}
                id={d.id}
                src={d.src}

            />)
            return (
                <div className={s.dialogs}>
                    <div className={s.dialogItems}>
                        {dialogItems}
                        <DialogState addPost={addPost}
                                     onPostChange={onPostChange}
                                     newDialogState={state.dialogPage.newDialogState}/>
                    </div>
                    <div className={s.item + ' ' + s.active}>
                        <br/>
                    </div>
                </div>

            )
        }
        }
    </StoreContext.Consumer>
}

export default DialogsItemContainer;