const ADD_POST = 'ADD_POST';
const ON_POST_CHANGE = 'ON_POST_CHANGE';

let initialState = {
    newPostState: 'YOY',
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 11},
        {id: 2, message: 'Okay', likeCount: 13},
        {id: 3, message: 'Right', likeCount: 15}
    ]
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_POST_CHANGE:
            state.newPostState = action.newText;
            return state;
        case  ADD_POST:
            let post = {
                id: 7,
                message: state.newPostState,
                likeCount: 17
            };
            state.posts.push(post);
            state.newPostState = '';
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: ON_POST_CHANGE, newText: text});

export default profileReducer;