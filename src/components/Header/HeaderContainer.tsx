import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {userSignOut} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {PhotosType, ProfileType} from "../../Types/Types";
// import {AppStateType} from "../../redux/redux-store";

type PropsType ={
    isAuth: boolean,
    login: string | null,
    userSignOut: () => void,


}

class HeaderContainer extends React.Component<PropsType> {

    render() {
        return <Header {...this.props} />
    }
}



const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})
export default connect(mapStateToProps, {userSignOut})(HeaderContainer);