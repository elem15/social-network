import React from 'react';
import s from '../Dialogs.module.css';
import StoreContext from "../../../redux/StoreContext";
import Message from "../Message/Message";

const MessageContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState();
            let messageItems = state.dialogPage.messages.map(m => <Message message={m.message}
                                                                           name={m.name}
                                                                           st={m.st}
            />)

            return (
                <div className={s.messages}>
                    <div>{messageItems}</div>
                </div>
            )
          }
        }
    </StoreContext.Consumer>
}

export default MessageContainer;