import React from "react";
import s from '../../components/Common/InputField/FormsContorls.module.css'
import {Field, reduxForm} from 'redux-form'
import {userSignIn, userSignOut} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {renderInput} from "../Common/InputField/FormsControls";
import {maxLength33, required} from "../../utils/validators";
import {Redirect} from "react-router-dom";

let LoginForm = ({ handleSubmit, submitting, error, captchaURL }) => {
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <div>
                    <Field name="email" type="email" label="Email" component={renderInput} validate={[required, maxLength33]}/>
                </div>
                <div>
                    <Field name="password" type="password" label="password" component={renderInput} validate={[required, maxLength33]}/>
                </div>
                <div>{captchaURL &&
                    <Field name="captcha" type="text" label="AntiBot" component={renderInput}/>}
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
let ExitForm = ({ handleSubmit }) => {
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <div>
                    <button>Sign out</button>
                </div>
            </form>
        </div>
    )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)
ExitForm = reduxForm({form: 'exit'})(ExitForm)

class Login extends React.Component {
    submit = values => {
        this.props.userSignIn(values.email, values.password, values.rememberMe, values.captcha)

    }
    unSubmit = () => {
        this.props.userSignOut()
    }


    render() {
        if (this.props.isAuth) {
            return <Redirect to={'/Profile'}/>
        }
        return (
            <div>
                <h1>Login</h1>
                <LoginForm onSubmit={this.submit} captchaURL={this.props.captchaURL}/>
                <ExitForm onSubmit={this.unSubmit}/>
                <div><img src={this.props.captchaURL} alt=""/></div>
            </div>)
    }
}

const mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL,
        serverMessage: state.auth.serverMessage
    }
}

export default connect(mapStateToProps, {userSignIn, userSignOut})(Login);