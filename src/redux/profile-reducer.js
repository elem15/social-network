import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const ADD_POST = 'social_network/profile/ADD_POST';
const SET_USER_PROFILE = 'social_network/profile/SET_USER_PROFILE';
const SET_USER_FOLLOW = 'social_network/profile/SET_USER_FOLLOW';
const SET_USER_STATUS = 'social_network/profile/SET_USER_STATUS';
const DELETE_POST = 'social_network/profile/DELETE_POST';
const SET_USER_PHOTO_SUCCESS = 'social_network/profile/SET_USER_PHOTO_SUCCESS';
const UPDATE_USER_PROFILE = 'social_network/profile/UPDATE_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 11},
        {id: 2, message: 'Okay', likeCount: 13},
        {id: 3, message: 'Right', likeCount: 15}
    ],
    newPostState: 'YOY',
    profile: null,
    followed: true,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case  ADD_POST:
            let countId = state.posts.length + 1;

            return {
                ...state,
                posts: [...state.posts,
                    {
                        id: countId,
                        message: action.text,
                        likeCount: 17 + countId
                    }]
            };

        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id !== action.postId)]
            }

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_USER_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}

        case UPDATE_USER_PROFILE:
            return {
                ...state, profile: {
                    ...state.profile,
                    fullName: action.profile.FullName,
                    aboutMe: action.profile.AboutMe,
                    lookingForAJob: action.profile.lookingForAJob,
                    lookingForAJobDescription: action.profile.lookingForAJobDescription
                }
            }

        case SET_USER_FOLLOW:
            return {...state, followed: action.followed}

        case SET_USER_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, text});
export const deletePostActionCreator = (postId) => ({type: DELETE_POST, postId});

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setUserFollow = (followed) => ({type: SET_USER_FOLLOW, followed})
const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
const setUserPhotoSuccess = (photos) => ({type: SET_USER_PHOTO_SUCCESS, photos})
const updateUserProfile = (profile) => ({type: UPDATE_USER_PROFILE, profile})

export const getUserProfile = (userId) =>
    async (dispatch) => {
        let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    }

export const savePhoto = (photoFile) =>
    async (dispatch) => {
        let response = await profileAPI.uploadPhoto(photoFile);
        if (response.data.resultCode === 0) {
            dispatch(setUserPhotoSuccess(response.data.data.photos))
        }
    }

export const getUserFollow = (userId) =>
    async (dispatch) => {
        let response = await usersAPI.getFollow(userId);
        dispatch(setUserFollow(response.data));
    }

export const getStatus = (userId) =>
    async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setUserStatus(response.data))
    }
export const updateStatus = (status) =>
    async (dispatch) => {
        try {
            let response = await profileAPI.updateStatus(status);
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        } catch (e) {
            console.error("Error occurred: "   )
        }
    }
export const updateProfile = (profile, userId) =>
    async (dispatch) => {
        // const userId = store.getState().auth.id;
        const response = await profileAPI.updateProfile(profile);
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId))
        } else if (response.data.resultCode === 1) {
            const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Same error';
            const getLastResponseWorld = (str) => {
                return str.split('>').map((word) => word[0].toLowerCase() + word.slice(1, word.length - 1))[1];
            }
            const action = stopSubmit('profile', {contacts: {[getLastResponseWorld(message)]: message}});
            dispatch(action);
            return Promise.reject(message)
        }
    }
export default profileReducer;