import React from 'react';
import s from '../Dialogs.module.css';
import {Field, reset, reduxForm} from "redux-form";
import {required, maxLength15} from '../../../utils/validators'
import {renderField} from "../../Common/InputField/FormsControls";

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
const afterSubmit = (result: string, dispatch: any) =>
    dispatch(reset('dialogAddMessageForm'));

const DialogStateFormRedux  = reduxForm({form: 'dialogAddMessageForm', onSubmitSuccess: afterSubmit
})(DialogStateForm)

export default DialogState;