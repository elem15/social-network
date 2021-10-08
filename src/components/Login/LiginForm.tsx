import React from "react";
import s from '../../components/Common/InputField/FormsContorls.module.css'
import {Field, reduxForm} from 'redux-form'
import {renderInput} from "../Common/InputField/FormsControls";
import {maxLength33, required} from "../../utils/validators";
import {Button} from "antd";


type OwnPropsType = {
    // captchaURL: string | null
}
type MapStatePropsType = {
    submitting: boolean
    error: string

}
type MapDispatchPropsType = {
    handleSubmit: any
}
type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType
const LoginFormContent: React.FC<PropsType> = ({ handleSubmit, submitting, error,  }) => {
    return (
        <div style={{maxWidth:'300px'}}>
            <form onSubmit={ handleSubmit }>
                <div>
                    <Field name="email" type="email" label="Email" component={renderInput} validate={[required, maxLength33]}/>
                </div>
                <div>
                    <Field name="password" type="password" label="password" component={renderInput} validate={[required, maxLength33]}/>
                </div>
                <div>
                    <Field name="rememberMe" component='input' type="checkbox"/> Remember Me
                </div>
                <div>
                    {error && <span className={s.formSummaryError}>{error}</span>}
                </div>
                <div>
                    <button className={s.button}><Button>Sign in</Button></button>
                </div>
            </form>
        </div>
    )
}

const LoginForm = reduxForm({form: 'login'})(LoginFormContent)

export default LoginForm

