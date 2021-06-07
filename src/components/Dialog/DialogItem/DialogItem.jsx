import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {

    let path = '/Dialogs/' + props.id;
    name = props.name;


    return <div className={s.item + ' ' + s.active}>
        <NavLink to={path}><img src={props.src}/><br/>
            {props.name}</NavLink>
        <br/>

    </div>;
}
export let name;
export default DialogItem;