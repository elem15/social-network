import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile, getUserFollow, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {ownUserName} from "../../redux/auth-reducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.ownUserName().then(()=> {

        let userId = this.props.match.params.userId;
        if (!userId && this.props.isAuth) {
            userId = this.props.id
        }
        this.props.getUserProfile(userId);
        this.props.getUserFollow(userId);
        this.props.getStatus(userId);})
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}
                     follow={this.props.follow} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.postPage.profile,
    follow: state.postPage.follow,
    status: state.postPage.status,
    id: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose (
    connect(mapStateToProps, {ownUserName, getUserProfile,
        getUserFollow, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)