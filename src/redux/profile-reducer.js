import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_FOLLOW = 'SET_USER_FOLLOW';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 11},
        {id: 2, message: 'Okay', likeCount: 13},
        {id: 3, message: 'Right', likeCount: 15}
    ],
    newPostState: 'YOY',
    profile: null,
    follow: true,
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
                        likeCount: 17
                    }]
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_USER_FOLLOW:
            return {...state, follow: action.follow}

        case SET_USER_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, text});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setUserFollow = (follow) => ({type: SET_USER_FOLLOW, follow})
const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) =>
    (dispatch) => {
        return profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }

export const getUserFollow = (userId = 2) =>
    (dispatch) => {
        return usersAPI.getFollow(userId).then(response => {
            dispatch(setUserFollow(response.data));
        })
    }

export const getStatus = (userId = 17889) =>
    (dispatch) => {
        return profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatus(response.data))
        })
    }

export const updateStatus = (status) =>
    (dispatch) => {
        return profileAPI.updateStatus(status).then(() => {
            dispatch(setUserStatus(status))
            })
    }

export default profileReducer;

