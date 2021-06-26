import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {ownUserName} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.ownUserName()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {ownUserName}) (HeaderContainer);