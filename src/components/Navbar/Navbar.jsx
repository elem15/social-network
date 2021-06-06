import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import DialogItem from "../Dialog/DialogItem/DialogItem";

const Navbar = (props) => {

     return (
        <nav className={s.nav}>
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
                <img src={props.dialogs[1].src} /> <br/>
                {props.dialogs[1].name}
            </li>
            <li><img src={props.dialogs[2].src} /> <br/>
                {props.dialogs[2].name}
            </li>
            <li>
                <img src={props.dialogs[3].src} /><br/>
                {props.dialogs[3].name}
            </li>
            </ul>
        </div>
      </nav>
    )
}

export default Navbar;