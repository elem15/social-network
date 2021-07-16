import React from 'react';
import s from './ProfileHead.module.css'

const ProfileHead = React.memo(props => {

  return (
      <div>
        <img className={s.top} src='https://wikiway.com/upload/iblock/dfd/16-voshod.jpg' />
      </div>
  )
})

export default ProfileHead;