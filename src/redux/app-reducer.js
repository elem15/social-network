import React from "react";
import {ownUserName} from "./auth-reducer";

const INITIALIZATION_SUCCESSFUL= 'INITIALIZATION_SUCCESSFUL';

let initialState = {
    initialization: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZATION_SUCCESSFUL:
            return {
                ...state,
                initialization: true
            }
        default:
            return state;
    }
}

const  initializationSuccessful = () => ({type: INITIALIZATION_SUCCESSFUL});

export const getInitialization = () =>
    (dispatch) => {
        const promise = dispatch(ownUserName());
        Promise.all([promise]).then (() => {
            dispatch(initializationSuccessful());
        })
    }

export default appReducer;