import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink, Route} from "react-router-dom";
import DialogStateForm from "./DialogStateForm";


const DialogItem = (props) => {


    return <div className={s.dialogContent}> {
     props.dialogs.map(d => <div  key={d.id}>

         <div className={s.item + ' ' + s.active}>
         <NavLink to={'/Dialogs/' + d.id}><img src={d.src}/><br/>
             {d.name}</NavLink>
         <br/>
          </div>
         </div>
        )
    }
        <DialogStateForm newDialogState={props.newDialogState} name={props.dialogs[3].name}
                         onPostChange={props.onPostChange} addMessage={props.addMessage}
                           />
    </div>

}

export default DialogItem;