import React from 'react';
import s from'./Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header} >
            <span><img className={`${s.image} ${s.active}`} src='https://avatars.mds.yandex.net/get-pdb/1754666/ed246d9f-c717-44c3-9022-dbd43488dcab/s1200?webp=false' /></span>

            <span className={s.loginBlock}> { props.isAuth ? props.login :
                <NavLink to={'/Login'}>Login</NavLink>
            }
            </span>
        </header>
    )
}

export default Header;