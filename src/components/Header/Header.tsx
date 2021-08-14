import React from 'react';
import s from'./Header.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean,
    login: string | null,
    userSignOut: () => void
}

const Header: React.FC<PropsType>  = (props) => {
    return (
        <header className={s.header} >
            <span><img className={`${s.image} ${s.active}`} src='https://avatars.mds.yandex.net/get-pdb/1754666/ed246d9f-c717-44c3-9022-dbd43488dcab/s1200?webp=false' /></span>

            <span className={s.loginBlock}> { props.isAuth
                ? <div > <div>{props.login}</div>
                    <button onClick={props.userSignOut}>Log out</button>
                   </div>
                : <div>
                    <NavLink to={'/Login'}>Login</NavLink>
                </div>
            }
            </span>
        </header>
    )
}

export default Header;