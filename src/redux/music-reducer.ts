import { ComposersType } from "../Types/Types";
import Bach from "../assets/music/Bach.mp3";
import Beethoven from "../assets/music/Ludwig Van Beethoven.mp3";
import Mozart from "../assets/music/Wolfgang Amadeus Mozart - Allegro moderato.mp3";

const SELECT_COMPOSER = 'SELECT_COMPOSER';

let initialState = {
    composers: [
        { id: 0, name: 'Johann Sebastian Bach', isLike: true, sample: Bach },
        { id: 1, name: 'Wolfgang Amadeus Mozart', isLike: false, sample: Mozart },
        { id: 2, name: 'Ludwig van Beethoven', isLike: false, sample: Beethoven }
    ] as Array<ComposersType>
}
type InitialStateActionType = typeof initialState

const musicReducer = (state = initialState, action: any): InitialStateActionType => {

    switch (action.type) {
        case SELECT_COMPOSER:
            return {
                ...state, composers:
                    state.composers.map(u => {
                        if (u.id === action.id) {
                            return { ...u, isLike: !u.isLike }
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

export const selectComposer = (id: number) => ({ type: SELECT_COMPOSER, id });

export default musicReducer;