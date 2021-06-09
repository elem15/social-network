import React from 'react';
import s from '../Dialogs.module.css';
import MessageInside from "./MessageInside";

const Message = (props) => {
  let messageItems = props.messages.map(m => <MessageInside message={m.message}
                                                                 name={m.name}
                                                                 st={m.st}
  />)
  return (
      <div className={s.messages}>
        <div>{messageItems}</div>
      </div>
  )
}

export default Message;