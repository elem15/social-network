import {ownUserName} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const INITIALIZATION_SUCCESSFUL= 'social_network/app/INITIALIZATION_SUCCESSFUL';

export type InitialStateType = {
    initialization: boolean,
}

const initialState: InitialStateType = {
    initialization: false,
}
type ActionType = InitializationSuccessfulActionType
const appReducer = (state = initialState, action: ActionType ) : InitialStateType => {

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

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
export const getInitialization = (): ThunkType =>
   async (dispatch) => {
        const promise = dispatch(ownUserName());
        await  Promise.all([promise]);
        dispatch(initializationSuccessful());
    }

export default appReducer;