import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>      
      <div className={s.descriptionBlock}>
        <div>
          <img className={s.avatar} src='https://avatars.mds.yandex.net/get-pdb/939186/2c26b871-bd00-40d2-8167-62660ef5634b/s1200' />
        </div>
        <div>Elem
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;