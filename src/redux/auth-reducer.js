import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import React from "react";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_LOGIN = 'SET_USER_LOGIN';
const DELETE_USER_LOGIN = 'DELETE_USER_LOGIN';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';
const GET_SERVER_MESSAGE = 'GET_SERVER_MESSAGE';
const DELETE_CAPTCHA_URL = 'DELETE_CAPTCHA_URL';

let initialState = {
    id: '',
    email: '',
    login: '',
    password: '',
    rememberMe: false,
    isAuth: false,
    serverMessage: '',
    captchaURL: ''
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,

            }
        case SET_USER_LOGIN:
            return {
                ...state,
                isAuth: true
            }
        case DELETE_USER_LOGIN:
            return {
                ...state,
                isAuth: false
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.url
            }
            case DELETE_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: ''
            }
        case GET_SERVER_MESSAGE:
            return {
                ...state,
                serverMessage: action.messages
            }
        default:
            return state;
    }
}

const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

export const ownUserName = () =>
    (dispatch) => {
        return authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
    }

const setUserLogin = () => ({type: SET_USER_LOGIN, data: {}});
const deleteUserLogin = () => ({type: DELETE_USER_LOGIN, data: {}});
const getCaptchaURL = (url) => ({type: GET_CAPTCHA_URL, url});
const deleteCaptchaURL = (url) => ({type: DELETE_CAPTCHA_URL});
const getServerMessage = (messages) => ({type: GET_SERVER_MESSAGE, messages});

export const userSignIn = (login, password, rememberMe, captcha) =>
    (dispatch) => {

        return authAPI.login(login, password, rememberMe, captcha).then(response => {
            dispatch(deleteCaptchaURL());
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
        })
    }


// export const userSignIn = (login, password, rememberMe) =>
//     {
//         return authAPI.login(login, password, rememberMe)
//     }
//
// export const userSignOut = () =>
//     {
//     return authAPI.exit()
// }
export const userSignOut = () =>
    (dispatch) => {
        return authAPI.exit().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
const captchaURL = () =>
    (dispatch) => {
        return authAPI.captcha().then(response => {
            if (response.data.url) {
                dispatch(getCaptchaURL(response.data.url));
            }
        })
    }

export default authReducer;