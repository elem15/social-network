import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unFollow,
    setCurrentPage,
    requestUsers,
} from "../../redux/users-reducer";
import Users from "./Users";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowingProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      isFetching={this.props.isFetching}
                      isFollowingProgress={this.props.isFollowingProgress}
                      toggleIsFetching={this.props.toggleIsFetching}
        />
        </>
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowingProgress: state.usersPage.isFollowingProgress
//     }
// };
const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getIsFollowingProgress(state)
    }
};

export default compose (
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        requestUsers: requestUsers,
    }),
    // withAuthRedirect
)(UsersContainer);