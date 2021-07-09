import React from "react";
import styles from './Login.module.css';
import {Field, reduxForm} from 'redux-form'
import {userSignIn, userSignOut} from "../../redux/auth-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {renderInput} from "../Common/InputField/FormsControls";
import {maxLength33, required} from "../../utils/validators";

let LoginForm = (props) => {
    const { handleSubmit, submitting } = props
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <div>
                    <Field name="email" type="email" label="Email" component={renderInput} validate={[required, maxLength33]}/>
                </div>
                <div>
                    <Field name="password" type="text" label="password" component={renderInput} validate={[required, maxLength33]}/>
                </div>
                <div>
                    <Field name="rememberMe" component='input' type="checkbox"/> Remember Me
                </div>
                <div>
                    <button type="submit" disabled={submitting}>Sign in</button>
                </div>
            </form>
        </div>
    )
}
let ExitForm = (props) => {
    const { handleSubmit } = props
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
        this.props.userSignIn(values.email, values.password, values.rememberMe)
    }
    unSubmit = () => {
        this.props.userSignOut()
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm onSubmit={this.submit}/>
                <ExitForm onSubmit={this.unSubmit}/>
            </div>)
    }
}

const mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {userSignIn, userSignOut})(Login);