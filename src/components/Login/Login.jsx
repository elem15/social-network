import React from "react";
import styles from './Login.module.css';
import {Field, reduxForm} from 'redux-form'

let LoginForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <Field name="login" component="input" type="text" placeholder='login'/>
            </div>
            <div>
                <Field name="password" component="input" type="text" placeholder='password'/>
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox"/> Remember Me
            </div>
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

class Login extends React.Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm onSubmit={this.submit}/>
            </div>)
    }
}

export default Login;