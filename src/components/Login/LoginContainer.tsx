import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {userSignIn, userSignOut} from "../../redux/auth-reducer";
import Login from "./Login";

type MapStatePropsType = {
    isAuth: boolean
    captchaURL: string | null
    serverMessage: string | null
}
type MapDispatchPropsType = {
}
type OwnPropsType = {
}
type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): PropsType =>{
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL,
        serverMessage: state.auth.serverMessage
    }
}

// const userSignIn = (email: string, password: string, rememberMe: string, captcha: string) => console.log(email, password, rememberMe, captcha)
const LoginContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {userSignIn, userSignOut})(Login);

export default LoginContainer