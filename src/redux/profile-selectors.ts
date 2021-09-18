import { createSelector } from "reselect";
import {AppStateType} from "./redux-store";

export const photosSelect = (state: AppStateType) => state.postPage.profile?.photos;
export const profileIdSelect = (state: AppStateType) => state.postPage.profile?.userId;

