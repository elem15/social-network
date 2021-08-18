import {FriendsType} from "../Types/Types";

const initialState = {
    friends: [
        {id: 1, name: 'Dima', src: 'https://avatarko.ru/img/avatar/9/serial_8759.jpg'},
        {id: 2, name: 'Andrey', src: 'https://avatarko.ru/img/avatar/33/muzhchina_32048.jpg'},
        {id: 3, name: 'Sveta', src: 'https://avatarko.ru/img/avatar/26/devushka_blondinka_kapyushon_25929.jpg'},
        {id: 4, name: 'Sasha', src: 'https://avatarko.ru/img/avatar/5/devushka_4066.jpg'},
        {id: 5, name: 'Victor', src: 'https://avatarko.ru/img/avatar/26/muzhchina_serfing_25374.jpg'},
    ] as Array<FriendsType>
};
type InitialStateActionType = typeof initialState;

const sidebarReducer = (state = initialState, action: any): InitialStateActionType => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sidebarReducer;