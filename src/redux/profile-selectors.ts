import { createSelector } from "reselect";
import {AppStateType} from "./redux-store";

export const photosSelect = (state: AppStateType) => state.postPage.profile?.photos;

