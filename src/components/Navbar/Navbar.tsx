import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import {DialogsType} from "../../Types/Types";

type MapStatePropsType = {
    dialogs: Array<DialogsType>
}
type MapDispatchPropsType = {
}
type OwnPropsType = {
}
type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType


const Navbar: React.FC<PropsType> = ({dialogs}) => {

                return <nav className={s.nav}>
                    <div>
                        <NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink>
                    </div>
                    <div>
                        <NavLink exact to='/Dialogs' activeClassName={s.activeLink}>Message</NavLink>
                    </div>
                    <div>
                        <NavLink to='/News' activeClassName={s.activeLink}>News</NavLink>
                    </div>
                    <div>
                        <NavLink to='/Music' activeClassName={s.activeLink}>Music</NavLink>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <NavLink to='/Users' activeClassName={s.activeLink}>Users</NavLink>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <NavLink to='/Settings' activeClassName={s.activeLink}>Settings</NavLink>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <NavLink to='/Friends' activeClassName={s.activeLink}>Friends</NavLink>
                        <br/>
                        <br/>
                        <ul className={s.friend}>
                            <li>
                                <img src={dialogs[1].src}/> <br/>
                                {dialogs[1].name}
                            </li>
                            <li><img src={dialogs[2].src}/> <br/>
                                {dialogs[2].name}
                            </li>
                            <li>
                                <img src={dialogs[3].src}/><br/>
                                {dialogs[3].name}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <NavLink to='/Login' activeClassName={s.activeLink}>Login</NavLink>
                    </div>
                </nav>
}

export default Navbar;