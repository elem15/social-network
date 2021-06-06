import React from 'react';
import s from'./Header.module.css';
const Header = () => {
    return (
        <header className={s.header} >
            <img className={`${s.image} ${s.active}`} src='https://avatars.mds.yandex.net/get-pdb/1754666/ed246d9f-c717-44c3-9022-dbd43488dcab/s1200?webp=false' />
        </header>
    )
}

export default Header;