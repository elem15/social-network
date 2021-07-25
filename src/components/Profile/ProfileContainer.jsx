import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile, getUserFollow, getStatus, updateStatus, savePhoto} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {ownUserName} from "../../redux/auth-reducer";


class ProfileContainer extends React.Component {
    setPreviousState() {
        let userId = this.props.match.params.userId;
        if (!userId && this.props.isAuth) {
            userId = this.props.id;
            if (!userId) {
                this.props.history.push('/Login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserFollow(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
       this.setPreviousState()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
        this.setPreviousState()
    }

    render() {

        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId} profile={this.props.profile}
                     follow={this.props.follow} status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     id={this.props.id} addPhoto={this.props.savePhoto}
            />
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
        getUserFollow, getStatus, updateStatus, savePhoto}),
    withRouter,
    // withAuthRedirect
)
(ProfileContainer)