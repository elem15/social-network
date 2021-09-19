import { createSelector } from "reselect";
import {AppStateType} from "./redux-store";

export const profileSelect = (state: AppStateType) => state.postPage.profile;
export const profileIdSelect = (state: AppStateType) => state.postPage.profile?.userId;

