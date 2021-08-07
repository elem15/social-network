import {ownUserName} from "./auth-reducer";

const INITIALIZATION_SUCCESSFUL= 'social_network/app/INITIALIZATION_SUCCESSFUL';

export type InitialStateType = {
    initialization: boolean,
}

let initialState: InitialStateType = {
    initialization: false,
}

const appReducer = (state = initialState, action: any ) : InitialStateType => {

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

type  InitializationSuccessfulActionType = {
    type: typeof INITIALIZATION_SUCCESSFUL
}
const  initializationSuccessful = (): InitializationSuccessfulActionType => ({type: INITIALIZATION_SUCCESSFUL});

export const getInitialization = () =>
   async (dispatch: any) => {
        const promise = dispatch(ownUserName());
        await  Promise.all([promise]);
        dispatch(initializationSuccessful());
    }

export default appReducer;