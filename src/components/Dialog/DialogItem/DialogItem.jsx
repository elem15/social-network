import React from 'react';
import DialogState from "./DialogState";
import s from "../Dialogs.module.css";
import {NavLink, Route} from "react-router-dom";
import Login from "../../Login/Login";


const DialogItem = (props) => {

    return <div> {
     props.dialogs.map(d => <div  key={d.id}>

         <div className={s.item + ' ' + s.active}>
         <NavLink to={'/Dialogs/' + d.id}><img src={d.src}/><br/>
             {d.name}</NavLink>
         <br/>
          </div>
         </div>
        )
    }
        <DialogState newDialogState={props.newDialogState} name={props.dialogs[2].name} onPostChange={props.onPostChange} addDialog={props.addDialog}/>
    </div>

}

export default DialogItem;