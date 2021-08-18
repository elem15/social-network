import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {userSignIn, userSignOut} from "../../redux/auth-reducer";
import Login from "./Login";

type MapStatePropsType = {
    isAuth: boolean
    captchaURL: string | undefined
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

const LoginContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {userSignIn, userSignOut})(Login);

export default LoginContainer