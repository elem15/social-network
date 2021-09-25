import {updateObjectInArray} from "../utils/object-helpers";
import {ComposersType} from "../Types/Types";


const SELECT_COMPOSER = 'SELECT_COMPOSER';

let initialState = {
    composers: [
{id: 0, name: 'Johann Sebastian Bach', isLike: true, sample: 'https://d9.hotplayer.ru/download/c4932a9e7ed877a02612cd7d0bc181a1/-2001021055_55021055/f5f9cce68d1a-2bd537e044e9-19319cc661ed/%D0%90%D0%BD%D1%81%D0%B0%D0%BC%D0%B1%D0%BB%D1%8C%20%D0%92%D0%B5%D1%81%D1%91%D0%BB%D1%8B%D0%B5%20%D1%80%D0%B5%D0%B1%D1%8F%D1%82%D0%B0%20-%20%D0%98%D0%BE%D0%B3%D0%B0%D0%BD%D0%BD%20%D0%A1%D0%B5%D0%B1%D0%B0%D1%81%D1%82%D1%8C%D1%8F%D0%BD%20%D0%91%D0%B0%D1%85%20-%20%D0%A2%D0%BE%D0%BA%D0%BA%D0%B0%D1%82%D0%B0%20D-Moll.mp3'},
{id: 1, name: 'Wolfgang Amadeus Mozart', isLike: false, sample: 'https://d9.hotplayer.ru/download/684847feebcae6133731dd3e8fc1625f/-2001721007_66721007/14ff98edde0a-c10a10d2a656-fb5ec3482b0/W.%20Mozart%20-%20Allegro.mp3'},
{id: 2, name: 'Ludwig van Beethoven', isLike: false, sample: 'https://d7.hotplayer.ru/download/7c1e7efe14e524caa20a1683f66455d7/-2001762940_50762940/4a68d2dabe5-120880c4f0da6-1272750ac7e5/%D0%9B%D1%83%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%A1%D0%BE%D0%BD%D0%B0%D1%82%D0%B0%2C%20%D0%9B%D1%8E%D0%B4%D0%B2%D0%B8%D0%B3%20%D0%B2%D0%B0%D0%BD%20%D0%91%D0%B5%D1%82%D1%85%D0%BE%D0%B2%D0%B5%D0%BD%2C%20%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%20-%20%D0%9B%D1%83%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%A1%D0%BE%D0%BD%D0%B0%D1%82%D0%B0%20%28%D0%A1%D0%BE%D0%BD%D0%B0%D1%82%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D1%84%D0%BE%D1%80%D1%82%D0%B5%D0%BF%D0%B8%D0%B0%D0%BD%D0%BE%20%E2%84%96%2014%29.mp3'}
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