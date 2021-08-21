import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'social_network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'social_network/auth/GET_CAPTCHA_URL';

type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    password: string | null,
    rememberMe: boolean,
    isAuth: boolean,
    serverMessage: string | null,
    captchaURL: string | null
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    password: null,
    rememberMe: false,
    isAuth: false,
    serverMessage: null,
    captchaURL: null
}

const authReducer = (state = initialState, action: any) : InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

type SetAuthUserDataActionPayloadType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}
const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean)
    : SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

export const ownUserName = () =>
    async (dispatch: any) => {
        let response = await authAPI.me();
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }

type GetCaptchaURLActionType = {
    type: typeof GET_CAPTCHA_URL,
    payload: {captchaURL: string}
}
const getCaptchaURL = (captchaURL: string) : GetCaptchaURLActionType => ({type: GET_CAPTCHA_URL, payload: {captchaURL}});

export const userSignIn = (login: string, password: string, rememberMe=false, captcha: string | null = null) =>
    async (dispatch: any) => {
        let response = await authAPI.login(login, password, rememberMe, captcha);
        // dispatch(deleteCaptchaURL());
        if (response.data.resultCode === 0) {
            dispatch(ownUserName());
        } else if (response.data.resultCode === 10) {
            let action = stopSubmit('login', {captcha: 'Enter the captcha'});
            dispatch(action);
            dispatch(captchaURL());
        } else if (response.data.resultCode === 1) {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Same error';
            let action = stopSubmit('login', {_error: message});
            dispatch(action);
        }
    }

export const userSignOut = () =>
    async (dispatch: any) => {
        let response = await authAPI.exit()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
const captchaURL = () =>
    async (dispatch: any) => {
        let response = await securityAPI.captcha()
        if (response.data.url) {
            dispatch(getCaptchaURL(response.data.url));
        }
    }

export default authReducer;