import React from 'react';
import s from '../Dialogs.module.css';
import {Field, reset, reduxForm} from "redux-form";
import {required, maxLength33} from '../../../utils/validators'
import {renderField} from "../../Common/InputField/FormsControls";
import { Button } from "antd";

type PropsType = {
    addMessage: (newMessageBody: string) => void,
}

const DialogState: React.FC<PropsType> = ({addMessage}) => {

    let addDialog = (newMessageBody: string) => {
        addMessage(newMessageBody);
    };

    let addNewMessage = (values: any) => {
        addDialog(values.newMessageBody)
    }

    return <DialogStateFormRedux onSubmit={addNewMessage}/>
}
type DialogStateFormType = {
    handleSubmit: any
}
const DialogStateForm: React.FC<DialogStateFormType> = ({handleSubmit}) => {
    return <form className={s.item + ' ' + s.active} onSubmit={handleSubmit}>
        <div className={s.field}>
            <Field component={renderField }
                   name='newMessageBody'
                   label='Enter you message'
                   validate={[required, maxLength33]}
            />
        </div>
        <div>
            <button className={s.button}><Button>Add post</Button></button>
        </div>
    </form>
}
const afterSubmit = (result: string, dispatch: any) =>
    dispatch(reset('dialogAddMessageForm'));

const DialogStateFormRedux  = reduxForm({form: 'dialogAddMessageForm', onSubmitSuccess: afterSubmit
})(DialogStateForm)

export default DialogState;