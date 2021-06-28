import {usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const ON_POST_CHANGE = 'ON_POST_CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_FOLLOW = 'SET_USER_FOLLOW'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 11},
        {id: 2, message: 'Okay', likeCount: 13},
        {id: 3, message: 'Right', likeCount: 15}
    ],
    newPostState: 'YOY',
    profile: null,
    follow: true
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case  ADD_POST:
            let countId = state.posts.length + 1;

            return {
                ...state, newPostState: '',
                posts: [...state.posts,
                    {
                        id: countId,
                        message: state.newPostState,
                        likeCount: 17
                    }]
            };
 
        case ON_POST_CHANGE:
            return {...state, newPostState: action.newText};

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_USER_FOLLOW:
            return {...state, follow: action.follow}

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: ON_POST_CHANGE, newText: text});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setUserFollow = (follow) => ({type: SET_USER_FOLLOW, follow})

export const getUserProfile = (userId) =>
    (dispatch) => {
    return usersAPI.getProfile(userId, setUserProfile).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export const getId = (userId=2) =>
    (dispatch) => {
        return usersAPI.getId().then(response => {
            let follow;
            let items =  response.data.items;
            for (let i=0; i < items.length; i++) {
                if (items[i].id == userId) {
                    follow = items[i].followed;
                }
            }
        dispatch(setUserFollow(follow));
        })
    }

export default profileReducer;

