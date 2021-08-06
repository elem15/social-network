import {ownUserName} from "./auth-reducer";

const INITIALIZATION_SUCCESSFUL= 'social_network/app/INITIALIZATION_SUCCESSFUL';

let initialState = {
    initialization: false
}

const appReducer = (state = initialState, action: any ) => {

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
   async (dispatch: any) => {
        const promise = dispatch(ownUserName());
        await  Promise.all([promise]);
        dispatch(initializationSuccessful());
    }

export default appReducer;