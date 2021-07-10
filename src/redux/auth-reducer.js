import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_LOGIN = 'SET_USER_LOGIN';
const DELETE_USER_LOGIN = 'DELETE_USER_LOGIN';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';
const GET_SERVER_MESSAGE = 'GET_SERVER_MESSAGE';

let initialState = {
    id: null,
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
        case GET_SERVER_MESSAGE:
            return {
                ...state,
                serverMessage: action.messages
            }
        default:
            return state;
    }
}

const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
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
const getServerMessage = (messages) => ({type: GET_SERVER_MESSAGE, messages});

export const userSignIn = (login, password, rememberMe, captcha) =>

    (dispatch) => {
        return authAPI.login(login, password, rememberMe, captcha).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(ownUserName());
            } else if (response.data.resultCode === 10) {
                dispatch(captchaURL())
            } else if (response.data.resultCode === 1) {
                dispatch(getServerMessage(response.data.messages))
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