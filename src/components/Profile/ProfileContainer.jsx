import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile, getUserFollow} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId);
        this.props.getUserFollow(this.props.match.params.userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}
                     follow={this.props.follow} />
        )
    }
}



let mapStateToProps = (state) => ({
    profile: state.postPage.profile,
    follow: state.postPage.follow,

});

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile, getUserFollow}) (WithUrlDataContainerComponent);