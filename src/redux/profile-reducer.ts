import {profileAPI, ResultCodeEnum, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import { PhotosType, PostsType, ProfileType } from "../Types/Types";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";
const ADD_POST = 'social_network/profile/ADD_POST';
const SET_USER_PROFILE = 'social_network/profile/SET_USER_PROFILE';
const SET_USER_FOLLOW = 'social_network/profile/SET_USER_FOLLOW';
const SET_USER_STATUS = 'social_network/profile/SET_USER_STATUS';
const DELETE_POST = 'social_network/profile/DELETE_POST';
const SET_USER_PHOTO_SUCCESS = 'social_network/profile/SET_USER_PHOTO_SUCCESS';
const UPDATE_USER_PROFILE = 'social_network/profile/UPDATE_USER_PROFILE';
const LIKE_INCREMENT = 'social_network/profile/LIKE_INCREMENT'
const DISLIKE_INCREMENT = 'social_network/profile/DISLIKE_INCREMENT'
const PROFILE_INITIALIZATION = 'social_network/profile/PROFILE_INITIALIZATION'
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 11, disLikeCount: 2},
        {id: 2, message: 'Okay', likeCount: 13, disLikeCount: 3},
        {id: 3, message: 'Right', likeCount: 15, disLikeCount: 1 }
    ] as Array<PostsType>,
    newPostState: 'YOY' as string,
    profile: null as ProfileType | null,
    followed: true as boolean,
    status: '',
    initialization: false as boolean
};
type initialStateType = typeof initialState;
type ActionType = AddPostActionCreatorActionType | DeletePostActionCreatorActionType | setUserProfileActionType |
    setUserFollowActionType | setUserStatusActionType | setUserPhotoSuccessActionType | likeIncrementType |
    disLikeIncrementType | setProfileInitialisationActionType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
const profileReducer = (state: initialStateType = initialState, action: any) : initialStateType  => {

    switch (action.type) {
        case  ADD_POST:
            const countId = state.posts.length + 1;

            return {
                ...state,
                posts: [...state.posts,
                    {
                        id: countId,
                        message: action.text,
                        likeCount: Math.floor(Math.random()*3) + countId,
                        disLikeCount: Math.floor(Math.random()*2)
                    }]
            };

        case LIKE_INCREMENT:
            return {
                ...state,
                posts: [...state.posts.map(p => (p.id === action.id)
                    ? {
                    id: p.id,
                    message: p.message,
                    likeCount: p.likeCount + 1,
                    disLikeCount: p.disLikeCount}
                    : p
                )]
            };
        case DISLIKE_INCREMENT:
            return {
                ...state,
                posts: [...state.posts.map(p => (p.id === action.id)
                    ? {
                        id: p.id,
                        message: p.message,
                        likeCount: p.likeCount,
                        disLikeCount: p.disLikeCount + 1
                    }
                    : p
                )]
            };

        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id !== action.postId)]
            }

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case PROFILE_INITIALIZATION:
            return {...state, initialization: true}

        case SET_USER_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}

        case UPDATE_USER_PROFILE:
            return {
                ...state, profile: {
                    ...state.profile,
                    fullName: action.profile.FullName,
                    aboutMe: action.profile.AboutMe,
                    lookingForAJob: action.profile.lookingForAJob,
                    lookingForAJobDescription: action.profile.lookingForAJobDescription
                } as ProfileType
            }

        case SET_USER_FOLLOW:
            return {...state, followed: action.followed}

        case SET_USER_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }
}

type setProfileInitialisationActionType = {
    type: typeof PROFILE_INITIALIZATION
}
const setProfileInitialization = (): setProfileInitialisationActionType => ({type: PROFILE_INITIALIZATION})

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST,
    text: string
}
export const addPostActionCreator = (text: string): AddPostActionCreatorActionType => ({type: ADD_POST, text});

type DeletePostActionCreatorActionType = {
    type: typeof DELETE_POST,
    postId: number
}
export const deletePostActionCreator = (postId: number): DeletePostActionCreatorActionType =>
    ({type: DELETE_POST, postId});

type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
const setUserProfile = (profile: ProfileType): setUserProfileActionType => ({type: SET_USER_PROFILE, profile})
type setUserFollowActionType = {
    type: typeof SET_USER_FOLLOW,
    followed: boolean
}
const setUserFollow = (followed: boolean):setUserFollowActionType => ({type: SET_USER_FOLLOW, followed})
type setUserStatusActionType = {
    type: typeof SET_USER_STATUS,
    status: string
}
const setUserStatus = (status: string): setUserStatusActionType => ({type: SET_USER_STATUS, status})
type setUserPhotoSuccessActionType = {
    type: typeof SET_USER_PHOTO_SUCCESS,
    photos: PhotosType
}
const setUserPhotoSuccess = (photos: PhotosType):setUserPhotoSuccessActionType => ({type: SET_USER_PHOTO_SUCCESS, photos})

type likeIncrementType = {
    type: typeof LIKE_INCREMENT
    id: number
}
export const likeIncrement  = (id: number) => ({
    type: LIKE_INCREMENT,
    id: id
})
type disLikeIncrementType = {
    type: typeof DISLIKE_INCREMENT
    id: number
}
export const disLikeIncrement  = (id: number) => ({
    type: DISLIKE_INCREMENT,
    id: id
})
export const getUserProfile = (userId: number): ThunkType =>
    async (dispatch) => {
        let response = await profileAPI.getProfile(userId);
        await dispatch(setUserProfile(response));
        await dispatch(setProfileInitialization())
    }

export const savePhoto = (photoFile: any): ThunkType =>
    async (dispatch) => {
        let response = await profileAPI.uploadPhoto(photoFile);
        if (response.resultCode === ResultCodeEnum.Success) {
            dispatch(setUserPhotoSuccess(response.data.photos))
        }
    }

export const getUserFollow = (userId: number): ThunkType =>
    async (dispatch) => {
        let response = await usersAPI.getFollow(userId);
        dispatch(setUserFollow(response));
    }

export const getStatus = (userId: number): ThunkType =>
    async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        await dispatch(setUserStatus(response))
    }
export const updateStatus = (status: string): ThunkType =>
    async (dispatch) => {
        try {
            let response = await profileAPI.updateStatus(status);
            if (response.resultCode === ResultCodeEnum.Success) {
                dispatch(setUserStatus(status))
            }
        } catch (e) {
            console.error("Error occurred: ")
        }
    }
export const updateProfile = (profile: ProfileType, userId: number): ThunkType =>
    async (dispatch) => {
        // const userId = store.getState().auth.id;
        const response = await profileAPI.updateProfile(profile);
        if (response.resultCode === ResultCodeEnum.Success) {
            await dispatch(getUserProfile(userId))
            await dispatch(setProfileInitialization())
        } else if (response.resultCode === ResultCodeEnum.Error) {
            const message = response.messages.length > 0 ? response.messages[0] : 'Same error';
            const getLastResponseWorld = (str: string) => {
                return str.split('>').map((word) => word[0].toLowerCase() + word.slice(1, word.length - 1))[1];
            }
            const action = stopSubmit('profile', {contacts: {[getLastResponseWorld(message)]: message}});
          // @ts-ignore
            dispatch(action);
            return Promise.reject(message)
        }
    }
export default profileReducer;