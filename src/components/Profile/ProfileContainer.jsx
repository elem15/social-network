import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import withRouter from "react-router-dom/es/withRouter";
import {getUserProfile} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
        // usersAPI.getProfile(this.props.match.params.userId, this.props.setUserProfile )
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.postPage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);