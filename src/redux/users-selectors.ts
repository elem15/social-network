import { createSelector } from "reselect";
import {AppStateType} from "./redux-store";

export const getUsers = (state: AppStateType) => state.usersPage.users;
export const selectUsers = createSelector(getUsers, (allUsers) => {
    return  allUsers.filter(user => true)
});

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getIsFollowingProgress = (state: AppStateType) => {
    return state.usersPage.isFollowingProgress
}
export const getPortionNumber = (state: AppStateType) => {
    return state.usersPage.portionNumber
}
export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}