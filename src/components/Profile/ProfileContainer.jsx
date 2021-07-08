import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile, getUserFollow, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId);
        this.props.getUserFollow(this.props.match.params.userId)
        this.props.getStatus(this.props.match.params.userId)
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
    status: state.postPage.status
});

export default compose (
    connect(mapStateToProps, {getUserProfile, getUserFollow, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)