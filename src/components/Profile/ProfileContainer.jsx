import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    getUserProfile,
    getUserFollow,
    getStatus,
    updateStatus,
    savePhoto,
    updateProfile
} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {ownUserName} from "../../redux/auth-reducer";
import {getIsFollowingProgress} from "../../redux/users-selectors";
import {follow, unFollow} from "../../redux/users-reducer";



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
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     id={this.props.id} addPhoto={this.props.savePhoto}
                     updateProfile={this.props.updateProfile}
                     users={this.props.users} follow={this.props.follow}
                     unFollow={this.props.unFollow}
                     isFollowingProgress={this.props.isFollowingProgress}
                     followed={this.props.followed}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.postPage.profile,
    followed: state.postPage.followed,
    status: state.postPage.status,
    id: state.auth.id,
    isAuth: state.auth.isAuth,
    isFollowingProgress: state.usersPage.isFollowingProgress
});

export default compose(
    connect(mapStateToProps, {
        ownUserName, getUserProfile,
        getUserFollow, getStatus, updateStatus, savePhoto, updateProfile, follow,
        unFollow
    }),
    withRouter,
    // withAuthRedirect
)
(ProfileContainer)