import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import React from "react";

const SET_USER_DATA = 'social_network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'social_network/auth/GET_CAPTCHA_URL';
const DELETE_CAPTCHA_URL = 'social_network/auth/DELETE_CAPTCHA_URL';

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
        default:
            return state;
    }
}

const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

export const ownUserName = () =>
    async (dispatch) => {
        let response = await authAPI.me();
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }

const getCaptchaURL = (url) => ({type: GET_CAPTCHA_URL, url});
const deleteCaptchaURL = () => ({type: DELETE_CAPTCHA_URL});


export const userSignIn = (login, password, rememberMe, captcha) =>
    async (dispatch) => {
        let response = await authAPI.login(login, password, rememberMe, captcha);
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
    }

export const userSignOut = () =>
    async (dispatch) => {
        let response = await authAPI.exit()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
const captchaURL = () =>
    async (dispatch) => {
        let response = await authAPI.captcha()
        if (response.data.url) {
            dispatch(getCaptchaURL(response.data.url));
        }
    }

export default authReducer;