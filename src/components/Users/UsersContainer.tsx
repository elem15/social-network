import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unFollow,
    requestUsers,
    toggleIsFetching,
    setPortionNumber
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
    currentPage: number,
    pageSize: number,
    isFollowingProgress: number[],
    isFetching: boolean,
    users: Array<UserType>,
    totalUsersCount: number,
    isAuth: boolean
    portionNumber: number

}
type MapDispatchPropsType = {
    unFollow: (userId: number) => void,
    follow: (userId: number) => void,
    requestUsers: (currentPage: number, pageSize: number) => void,
    toggleIsFetching: ((isFetching: boolean) => void)
    setPortionNumber: (portionNumber: number) => void
}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType>  {

    componentDidMount() {
        const {requestUsers, currentPage, pageSize} = this.props;
        requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {requestUsers, pageSize} = this.props;
        requestUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            <Title level={4}>{this.props.pageTitle}</Title>
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
                   isAuth={this.props.isAuth}
                   portionNumber={this.props.portionNumber}
                   setPortionNumber={this.props.setPortionNumber}

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
        portionNumber: getPortionNumber(state)
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
        setPortionNumber
    }
    ),
    // withAuthRedirect
)(UsersContainer);