import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../Types/Types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    isFollowingProgress: [] as Array<number> // array of usersId
};
type InitialStateActionType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateActionType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,
                     action.userID, 'id',  {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
              }

        case SET_USERS: {
            return { ...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                isFollowingProgress: action.isFetching
                    ? [...state.isFollowingProgress, action.userId]
                    : state.isFollowingProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}
type FollowSuccessActionType = {
    type: typeof FOLLOW,
    userID: number
}
export const followSuccess = (userID: number): FollowSuccessActionType=> ({type: FOLLOW, userID});
type UnFollowSuccessActionType = {
    type: typeof UNFOLLOW,
    userID: number
}
export const unFollowSuccess = (userID: number): UnFollowSuccessActionType => ({type: UNFOLLOW, userID});
type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users});
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage});
type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType =>
    ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});
type ToggleIsFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): ToggleIsFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (currentPage: number, pageSize: number) =>
    async (dispatch: any) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        const response = await usersAPI.requestUsers(currentPage, pageSize);
        if (response.data !== 0) {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUsersCount(response.data.totalCount));
        }
    }
const combineFollowUnfollow = async (dispatch: any, userId: number, following: any,
                                     followingSuccess: any) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    await following(userId);
        dispatch(followingSuccess(userId))
        dispatch(toggleIsFollowingProgress(false, userId));
}

export const unFollow = (userId: number) => {
    return async (dispatch: any) => {
        await combineFollowUnfollow(dispatch, userId, usersAPI.unFollow.bind(usersAPI),
            unFollowSuccess)
    }
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        await combineFollowUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI),
            followSuccess)
    }
}

export default usersReducer;