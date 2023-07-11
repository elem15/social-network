import {connect} from "react-redux";
import Music from "./Music";
import {selectComposer} from "../../redux/music-reducer";
import {ComposersType} from "../../Types/Types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    composers: Array<ComposersType>
}
type MapDispatchPropsType = {
    selectComposer: (id: number) => void
}
type OwnPropsType = {
}
const mapStateToProps = (state: AppStateType): MapStatePropsType =>{
    return {
        composers: state.musicReducer.composers,
    }
}

const MusicContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {selectComposer})(Music);

export default MusicContainer;