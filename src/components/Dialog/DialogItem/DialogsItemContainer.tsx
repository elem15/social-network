import {addMessageActionCreator} from "../../../redux/dialog-reducer";
import DialogsItem from "./DialogItem";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {DialogsType} from "../../../Types/Types";

type MapStatePropsType = {
    dialogs: Array<DialogsType>,
    isAuth: boolean
}
type MapDispatchPropsType = {
    addMessage: (newMessageBody: string) => void
}
type OwnPropsType = {
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogPage.dialogs,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: (newMessageBody: string) => {dispatch(addMessageActionCreator(newMessageBody))},
    }
}

const DialogsItemContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, mapDispatchToProps)(DialogsItem);

export default DialogsItemContainer;