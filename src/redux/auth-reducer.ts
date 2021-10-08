import {authAPI, profileAPI, ResultCodeEnum, ResultCodeForCaptcha, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {ProfileType} from "../Types/Types";


const SET_USER_DATA = 'social_network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'social_network/auth/GET_CAPTCHA_URL';
const GET_PROFILE = 'social_network/auth/GET_PROFILE';

type InitialStateType = {
    id: number,
    email: string | null,
    login: string | null,
    password: string | null,
    rememberMe: boolean,
    isAuth: boolean,
    serverMessage: string | null,
    captchaURL: string | null
    profile: ProfileType | null
}

let initialState: InitialStateType = {
    id: 0,
    email: null,
    login: null,
    password: null,
    rememberMe: false,
    isAuth: false,
    serverMessage: null,
    captchaURL: null,
    profile: null
}
type ActionType = SetAuthUserDataActionType | GetCaptchaURLActionType | GetProfileActionType

const authReducer = (state = initialState, action: any) : InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
            }
        case GET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
}

type SetAuthUserDataActionPayloadType = {
    id: number,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}
const setAuthUserData = (id: number, email: string | null, login: string | null, isAuth: boolean)
    : SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});
type GetProfileActionType = {
    type: typeof GET_PROFILE,
    profile: ProfileType
}
const getProfileUserData = (profile: ProfileType)
    : GetProfileActionType => ({
    type: GET_PROFILE,
    profile: profile
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const getUserProfile = (userId: number): ThunkType =>
    async (dispatch) => {
        let profile = await profileAPI.getProfile(userId);
        dispatch(getProfileUserData(profile));
    }

export const ownUserName = (): ThunkType =>
    async (dispatch) => {
        let meData = await authAPI.me();
        if (meData.resultCode === ResultCodeEnum.Success) {
            let {id, email, login} = meData.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
type GetCaptchaURLActionType = {
    type: typeof GET_CAPTCHA_URL,
    payload: {captchaURL: string}
}
const getCaptchaURL = (captchaURL: string) : GetCaptchaURLActionType => ({type: GET_CAPTCHA_URL, payload: {captchaURL}});

export const userSignIn = (login: string, password: string, rememberMe=false, captcha: string | null = null): ThunkType =>
    async (dispatch: any) => {
        let authLogin = await authAPI.login(login, password, rememberMe, captcha);
        dispatch(getCaptchaURL(''));
        if (authLogin.resultCode === ResultCodeEnum.Success) {
            dispatch(ownUserName());
        } else if (authLogin.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            let action = stopSubmit('login', {captcha: 'Enter the captcha'});
            dispatch(action);
            dispatch(captchaURL());
        } else if (authLogin.resultCode === ResultCodeEnum.Error) {
            let message = authLogin.messages.length > 0 ? authLogin.messages[0] : 'Same error';
            let action = stopSubmit('login', {_error: message});
            dispatch(action);
        }
    }

export const userSignOut = (): ThunkType =>
    async (dispatch: any) => {
        let response = await authAPI.exit()
        if (response.resultCode === ResultCodeEnum.Success) {
            dispatch(setAuthUserData(0, null, null, false));
        }
    }
const captchaURL = (): ThunkType =>
    async (dispatch: any) => {
        let response = await securityAPI.captcha()
        if (response.url) {
            dispatch(getCaptchaURL(response.url));
        }
    }

export default authReducer;