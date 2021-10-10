import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../Types/Types";
import {AppStateType} from "./redux-store";
import { Dispatch } from "redux";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_PORTION_NUMBER = 'SET_PORTION_NUMBER';
const SET_IS_FRIENDS = 'SET_IS_FRIENDS';
const SET_SEARCH_USER = 'SET_SEARCH_USER'


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 25 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    isFollowingProgress: [] as Array<number>,
    portionNumber: 1 as number,
    isFriends: null as boolean | null,
    searchUser: '' as string
};
type InitialStateActionType = typeof initialState;
type ActionType = ToggleIsFollowingProgressActionType | ToggleIsFetchingActionType |
    SetTotalUsersCountActionType | SetCurrentPageActionType | FollowSuccessActionType |
    UnFollowSuccessActionType | SetUsersActionType | setPortionNumberActionType | SetSearchUserActionType |
    SetIsFriendsActionType

const usersReducer = (state = initialState, action: ActionType): InitialStateActionType => {

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
        case SET_IS_FRIENDS: {
            return {...state, isFriends: action.isFriends}
        } 
        case SET_SEARCH_USER: {
            return {...state, searchUser: action.searchUser}
        } 
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_PORTION_NUMBER: {
            return {...state, portionNumber: action.portionNumber}
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
type setPortionNumberActionType = {
    type: typeof SET_PORTION_NUMBER,
    portionNumber: number
}
export const setPortionNumber = (portionNumber: number): setPortionNumberActionType => ({type: SET_PORTION_NUMBER, portionNumber})
type FollowSuccessActionType = {
    type: typeof FOLLOW,
    userID: number
}
export const followSuccess = (userID: number): FollowSuccessActionType => ({type: FOLLOW, userID});
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
type SetIsFriendsActionType = {
    type: typeof SET_IS_FRIENDS,
    isFriends: boolean | null
}
export const setIsFriends = (isFriends: boolean | null): SetIsFriendsActionType => ({ type: SET_IS_FRIENDS, isFriends})
type SetSearchUserActionType = {
    type: typeof SET_SEARCH_USER,
    searchUser: string
}
export const setSearchUser = (searchUser: string): SetSearchUserActionType => ({ type: SET_SEARCH_USER, searchUser})
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

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
type DispatchType = Dispatch<ActionType>
export const requestUsers = (currentPage: number, pageSize: number, isFriends: boolean | null, searchUser: string): ThunkType  =>
    async (dispatch, getState) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        const response = await usersAPI.requestUsers(currentPage, pageSize, isFriends, searchUser);
        if (response.error === null) {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
        }
    }
const _combineFollowUnfollow = async (dispatch: DispatchType, userId: number, following: any,
                                     followingSuccess: (userId: number) => FollowSuccessActionType | UnFollowSuccessActionType) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    await following(userId);
        dispatch(followingSuccess(userId))
        dispatch(toggleIsFollowingProgress(false, userId));
}

export const unFollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _combineFollowUnfollow(dispatch, userId, usersAPI.unFollow.bind(usersAPI),
            unFollowSuccess)
    }
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _combineFollowUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI),
            followSuccess)
    }
}

export default usersReducer;