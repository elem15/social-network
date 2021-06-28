import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import {getUserProfile, getId} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId);
        this.props.getId(this.props.match.params.userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} follow={this.props.follow}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.postPage.profile,
    follow: state.postPage.follow,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile, getId}) (WithUrlDataContainerComponent);