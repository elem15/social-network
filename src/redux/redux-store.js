import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    postPage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;