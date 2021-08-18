import React from "react";
import {Redirect} from "react-router-dom";
import LoginForm from "./LiginForm";
import LoginFormWithCaptcha from "./LiginFormWithCaptcha";

type OwnPropsType = {}
type MapStatePropsType = {
    isAuth: boolean
    captchaURL: string | undefined
}
type MapDispatchPropsType = {
    onSubmit: any
    userSignIn:
        (login: string, password: string, rememberMe: boolean, captcha: string | null) =>
            void
    userSignOut: () => void
}
// type valuesType = {email: string, password: string, rememberMe: boolean, captcha: string | null}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

class Login extends React.Component<PropsType> {
    submit = (values: any) => {
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
                <h1>Login</h1>{this.props.captchaURL
                ? <LoginFormWithCaptcha onSubmit={this.submit}/>
                : <LoginForm onSubmit={this.submit}/>
            }

                {this.props.captchaURL && <div><img src={this.props.captchaURL} alt=""/></div>}
            </div>)
    }
}

// <LoginForm onSubmit={this.submit} captchaURL={this.props.captchaURL}/> - didn't admit type
export default Login

