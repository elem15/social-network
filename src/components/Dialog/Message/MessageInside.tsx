import React from 'react';
import s from '../Dialogs.module.css';

type PropsType = {
  message: string,
  name: string,
  st: string,
  key: number
}

const MessageInside: React.FC<PropsType> = (props) => {

  return (
      <div className={s.messages + ' ' + s[props.st]}><div className={s.name}>{props.name}:</div>{props.message}
  </div>
  )
}

export default MessageInside;