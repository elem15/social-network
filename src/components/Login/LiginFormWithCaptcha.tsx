import React from "react";
import s from '../../components/Common/InputField/FormsContorls.module.css'
import {Field, reduxForm} from 'redux-form'
import {renderInput} from "../Common/InputField/FormsControls";
import {maxLength33, required} from "../../utils/validators";


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
        <div>
            <form onSubmit={ handleSubmit }>
                <div>
                    <Field name="email" type="email" label="Email" component={renderInput} validate={[required, maxLength33]}/>
                </div>
                <div>
                    <Field name="password" type="password" label="password" component={renderInput} validate={[required, maxLength33]}/>
                </div>
                <div>
                    <Field name="captcha" type="text" label="AntiBot" component={renderInput} validate={[required]}/>
                </div>
                <div>
                    <Field name="rememberMe" component='input' type="checkbox"/> Remember Me
                </div>
                {error && <span className={s.formSummaryError}>{error}</span>}
                <div>
                    <button type="submit" disabled={submitting}>Sign in</button>
                </div>
            </form>
        </div>
    )
}
//// @ts-ignore
const LoginFormWithCaptcha = reduxForm({form: 'login'})(LoginFormContent)

export default LoginFormWithCaptcha

