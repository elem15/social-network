import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_LOGIN = 'SET_USER_LOGIN';
const DELETE_USER_LOGIN = 'DELETE_USER_LOGIN';

let initialState = {
    id: null,
    email: '',
    login: '',
    password: '',
    rememberMe: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
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

        default:
            return state;
    }
}

const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export const ownUserName = () =>
    (dispatch) => {
        return authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
    }

const setUserLogin = () => ({type: SET_USER_LOGIN, data: {}});
const deleteUserLogin = () => ({type: DELETE_USER_LOGIN, data: {}});

export const userSignIn = (login, password, rememberMe) =>
    (dispatch) => {
        return authAPI.login(login, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserLogin());
            }
        })
    }

export const userSignOut = () =>
    {
    return authAPI.exit()
}
// export const userSignOut = () =>
//     (dispatch) => {
//         return authAPI.exit().then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(deleteUserLogin());
//             }
//         })
//     }

export default authReducer;