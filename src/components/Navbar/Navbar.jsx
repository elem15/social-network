import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import DialogItem from "../Dialog/DialogItem/DialogItem";
import StoreContext from "../../redux/StoreContext";

const Navbar = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                return <nav className={s.nav}>
                    <div>
                        <NavLink to='/Profile/Profile.jsx' activeClassName={s.activeLink}>Profile</NavLink>
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
                                <img src={state.dialogPage.dialogs[1].src}/> <br/>
                                {state.dialogPage.dialogs[1].name}
                            </li>
                            <li><img src={state.dialogPage.dialogs[2].src}/> <br/>
                                {state.dialogPage.dialogs[2].name}
                            </li>
                            <li>
                                <img src={state.dialogPage.dialogs[3].src}/><br/>
                                {state.dialogPage.dialogs[3].name}
                            </li>
                        </ul>
                    </div>
                </nav>
            }
            }
        </StoreContext.Consumer>
    )
}

export default Navbar;