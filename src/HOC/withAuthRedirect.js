import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {ownUserName} from "../redux/auth-reducer";

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth) {
                return <Component {...this.props} />
            }
            return <Redirect to='/Login'/>
        }
    }
    return connect(mapStateToPropsRedirect, {ownUserName})(RedirectComponent);
}
