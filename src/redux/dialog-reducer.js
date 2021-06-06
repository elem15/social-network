const ADD_MESSAGE = 'ADD_MESSAGE';
const ON_MESSAGE_CHANGE = 'ON_MESSAGE_CHANGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima', src: 'https://avatarko.ru/img/avatar/9/serial_8759.jpg', newDialogState: 'YOY'},
        {
            id: 2,
            name: 'Andrey',
            src: 'https://avatarko.ru/img/avatar/33/muzhchina_32048.jpg',
            newDialogState: 'WOW'
        },
        {
            id: 3,
            name: 'Sveta',
            src: 'https://avatarko.ru/img/avatar/26/devushka_blondinka_kapyushon_25929.jpg',
            newDialogState: ''
        },
        {id: 4, name: 'Sasha', src: 'https://avatarko.ru/img/avatar/5/devushka_4066.jpg', newDialogState: ''},
        {
            id: 5,
            name: 'Victor',
            src: 'https://avatarko.ru/img/avatar/26/muzhchina_serfing_25374.jpg',
            newDialogState: ''
        },
    ],
    messages: [
        {id: 1, message: 'Hi!', name: 'Dima', st: 'active', newMessageState: ''},
        {id: 2, message: 'How are you?', name: 'Andrey', st: "passive", newMessageState: ''},
        {id: 3, message: 'Wow!', name: 'Sveta', st: 'active', newMessageState: ''},
        {id: 4, message: 'Yo!', name: 'Sasha', st: 'passive', newMessageState: ''},
        {id: 5, message: 'Yah!', name: 'Victor', st: 'active', newMessageState: ''},
    ],
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_MESSAGE_CHANGE:
            state.messages.newMessageState = action.newText;
            return state;
        case ADD_MESSAGE:
            let positon = '';
            if (state.messages.length % 2 === 0) {
                positon = 'active';
            } else {
                positon = 'passive'
            }
            let countId = state.length + 1;
            let post = {
                id: countId,
                message: state.messages.newMessageState,
                name: action.currentName,
                st: positon
            };
            state.messages.push(post);
            state.messages.newMessageState = '';
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = (name) => ({type: ADD_MESSAGE, currentName: name});
export const onMessageChangeActionCreator = (text) =>  ({type: ON_MESSAGE_CHANGE, newText: text});

export default dialogReducer;
