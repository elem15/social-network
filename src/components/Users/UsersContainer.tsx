import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unFollow,
    requestUsers,
    toggleIsFetching,
    setPortionNumber,
    setSearchUser,
    setIsFriends
} from "../../redux/users-reducer";
import Users from "./Users";
// import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getIsAuth,
    getIsFetching,
    getIsFollowingProgress,
    getPageSize,
    getTotalUsersCount,
    getPortionNumber,
    getIsFriends,
    getSearchUser,
    selectUsers
} from "../../redux/users-selectors";
import {UserType} from "../../Types/Types";
import {AppStateType} from "../../redux/redux-store";
import {Typography} from "antd";


const {Title} = Typography

type OwnPropsType = {
    pageTitle: string
}
type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFollowingProgress: number[]
    isFetching: boolean
    users: Array<UserType>
    totalUsersCount: number
    isAuth: boolean
    portionNumber: number
    isFriends: boolean | null
    searchUser: string
}
type MapDispatchPropsType = {
    unFollow: (userId: number) => void,
    follow: (userId: number) => void,
    requestUsers: (currentPage: number, pageSize: number, isFriends: boolean | null, searchUser: string) => void,
    toggleIsFetching: ((isFetching: boolean) => void)
    setPortionNumber: (portionNumber: number) => void
    setIsFriends: ((isFriends: boolean | null) => void)
    setSearchUser: ((searchUser: string) => void)
}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType>  {

    componentDidMount() {
        const {requestUsers, currentPage, pageSize, isFriends, searchUser} = this.props;
        requestUsers(currentPage, pageSize, isFriends, searchUser);
    }

    onPageChanged = (pageNumber: number) => {
        const {requestUsers, pageSize, isFriends, searchUser} = this.props;
        requestUsers(pageNumber, pageSize, isFriends, searchUser);
    }
    onSearchUserPageChanged = (pageNumber: number, isFriends: boolean | null, searchUser: string) => {
        const {requestUsers, pageSize} = this.props;
        requestUsers(pageNumber, pageSize, isFriends, searchUser);
    }

    render() {
        return <>
            <Title level={4}>{this.props.pageTitle}</Title>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   onSearchUserPageChanged={this.onSearchUserPageChanged}
                   setIsFriends={this.props.setIsFriends}
                   setSearchUser={this.props.setSearchUser}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   isFetching={this.props.isFetching}
                   isFollowingProgress={this.props.isFollowingProgress}
                   toggleIsFetching={this.props.toggleIsFetching}
                   isAuth={this.props.isAuth}
                   portionNumber={this.props.portionNumber}
                   setPortionNumber={this.props.setPortionNumber}
                   isFriends={this.props.isFriends}

            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: selectUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getIsFollowingProgress(state),
        isAuth: getIsAuth(state),
        portionNumber: getPortionNumber(state),
        isFriends: getIsFriends(state),
        searchUser: getSearchUser(state)
    }
};

export default
compose(
    //TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {
        follow,
        unFollow,
        requestUsers: requestUsers,
        toggleIsFetching: toggleIsFetching,
        setPortionNumber,
        setIsFriends,
        setSearchUser
    }
    ),
    // withAuthRedirect
)(UsersContainer);