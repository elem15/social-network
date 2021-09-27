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
    updateProfile,
    deleteUserProfile,
    deleteUserStatus
} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {ownUserName} from "../../redux/auth-reducer";
import {follow, unFollow} from "../../redux/users-reducer";
import {ProfileType, UserType} from "../../Types/Types";
import {AppStateType} from "../../redux/redux-store";

type matchType = {
    isExact: boolean
    params: {
        userId: any
    }
    path: string
    url: string
}
type OwnPropsType = {
    match: matchType
    history: Array<string>
    users: Array<UserType>
    isOwner: boolean
}
type MapStatePropsType = {
    isAuth: boolean
    id: number
    profile: ProfileType | null
    status: string
    isFollowingProgress: Array<number>
    followed: boolean
    initialization: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserFollow: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (photoFile: any) => void
    updateProfile: (profile: ProfileType, userId: number ) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    ownUserName: () => void
    deleteUserProfile: () => void
    deleteUserStatus: () => void
}

export type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {
    setPreviousState() {
        let userId = this.props.match.params.userId;
        if (!userId && this.props.isAuth) {
            userId = this.props.id;
            if (!userId) {
                this.props.history.push('/Login')
            }
        }
        this.props.deleteUserProfile()
        this.props.deleteUserStatus()
        this.props.getUserProfile(userId);
        this.props.getUserFollow(userId);
        this.props.getStatus(userId);
    }
    isOwnerOnHisPage() {

            if (+this.props.match.params.userId === this.props.id) {
               this.ownerOnHisPage = true
            }
            else if (+this.props.match.params.userId !== this.props.id)
                this.ownerOnHisPage = false
    }
    ownerOnHisPage = false
    componentDidMount() {
        this.setPreviousState()
        this.isOwnerOnHisPage()
    }
    componentWillUnmount(): void {
        this.props.deleteUserProfile()
        this.props.deleteUserStatus()
    }

    componentDidUpdate(prevProps: PropsType, prevState: MapStatePropsType ) {
        const userId = this.props.match.params.userId
        if (userId !== prevProps.match.params.userId)
            // this.props.getStatus(userId);
            this.setPreviousState()
            this.isOwnerOnHisPage()
    }
    isOwner(uId: number | undefined):boolean {
        if (uId === undefined) {
            return true
        } else return false
    }

    render() {
        return (
            <Profile
                     ownerOnHisPage={this.ownerOnHisPage}
                     isOwner={this.isOwner(this.props.match.params.userId)}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     updateProfile={this.props.updateProfile}
                     follow={this.props.follow}
                     unFollow={this.props.unFollow}
                     isFollowingProgress={this.props.isFollowingProgress}
                     followed={this.props.followed} isAuth={this.props.isAuth}
                     initialization={this.props.initialization}
                     authId={this.props.id}
                     getStatus={this.props.getStatus}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.postPage.profile,
    followed: state.postPage.followed,
    status: state.postPage.status,
    id: state.auth.id,
    isAuth: state.auth.isAuth,
    isFollowingProgress: state.usersPage.isFollowingProgress,
    initialization: state.postPage.initialization
});

export default compose(
    withAuthRedirect,
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {
        ownUserName, getUserProfile,
        getUserFollow, getStatus, updateStatus, savePhoto, updateProfile, follow,
        unFollow, deleteUserProfile, deleteUserStatus
    }),
    withRouter
)(ProfileContainer);