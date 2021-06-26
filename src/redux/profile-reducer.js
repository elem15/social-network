import {usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const ON_POST_CHANGE = 'ON_POST_CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 11},
        {id: 2, message: 'Okay', likeCount: 13},
        {id: 3, message: 'Right', likeCount: 15}
    ],
    newPostState: 'YOY',
    profile: null
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

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: ON_POST_CHANGE, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) =>
    (dispatch) => {
    return usersAPI.getProfile(userId, setUserProfile).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export default profileReducer;