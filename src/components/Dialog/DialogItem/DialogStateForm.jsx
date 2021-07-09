import React from 'react';
import s from '../Dialogs.module.css';
import {Field, reduxForm} from "redux-form";
import {required, maxLength15} from '../../../utils/validators'
import {renderField} from "../../Common/InputField/FormsControls";
const DialogState = (props) => {

    let addDialog = (newMessageBody) => {
        props.addDialog(props.name, newMessageBody);
    };

    let addNewMessage = (values) => {
        addDialog(values.newMessageBody)
    }

    return <DialogStateForm onSubmit={addNewMessage}/>
}

let DialogStateForm = (props) => {
    return <form className={s.item + ' ' + s.active} onSubmit={props.handleSubmit}>
        <div>
            <Field component={renderField }
                   name='newMessageBody'
                   label='Enter you message'
                   validate={[required, maxLength15]}
            />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}


DialogStateForm  = reduxForm({form: 'dialogAddMessageForm'})(DialogStateForm)

export default DialogState;