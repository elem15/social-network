import {updateObjectInArray} from "../utils/object-helpers";
import {ComposersType} from "../Types/Types";



const SELECT_COMPOSER = 'SELECT_COMPOSER';

let initialState = {
    composers: [
    {id: 0, name: 'Johann Sebastian Bach', isLike: true, sample: 'https://dl1.mp3party.net/download/8817358'},
    {id: 1, name: 'Wolfgang Amadeus Mozart', isLike: false, sample: 'https://dl1.mp3party.net/download/8445800'},
    {id: 2, name: 'Ludwig van Beethoven', isLike: false, sample: 'https://dl1.mp3party.net/download/9067182'}
] as Array<ComposersType>
}
type InitialStateActionType = typeof initialState

const musicReducer = (state = initialState, action:any): InitialStateActionType => {

    switch (action.type) {
        case SELECT_COMPOSER:
            return {
                ...state, composers:
                 state.composers.map(u => {
                    if (u.id === action.id) {
                        return {...u, isLike: !u.isLike}
                    } else {
                        return {
                            ...u, isLike: false
                        }
                    }
                    return u
                })
            };

        default:
            return state;
    }
}

export const selectComposer = (id:number) => ({type: SELECT_COMPOSER, id});

export default musicReducer;