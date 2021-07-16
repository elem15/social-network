import { render, screen } from '@testing-library/react';

import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";


let state = {
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

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('Hello World!')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
});

test('new post should be `Hello World!`', () => {
    let action = addPostActionCreator('Hello World!')
    let newState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe('Hello World!')
});

test('length of posts should be decremented`', () => {
    let action = deletePostActionCreator(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
});
test('length of posts should not be decremented if id incorrect`', () => {
    let action = deletePostActionCreator(10)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
});
