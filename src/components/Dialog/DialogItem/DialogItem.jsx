import React from 'react';
import DialogItemInside from "./DialogItemInside";
import DialogState from "./DialogState";

const DialogItem = (props) => {

    let dialogItems = props.dialogs.map(d => <DialogItemInside
        name={d.name}
        id={d.id}
        src={d.src}
    />)

    return <div >
        {dialogItems}
        <DialogState onPostChange={props.onPostChange} addDialog={props.addDialog}/>
    </div>;
}

export default DialogItem;