import { Friend } from "../types/State";
import { RootState } from "./store";


export const selectUserTokens = (state: RootState) : number => state.tokens;
export const selectUserUsername = (state: RootState) => state.username;
export const selectUserFirstName = (state: RootState) => state.first_name;
export const selectUserFriends = (state: RootState): Friend[] => state.friends;
export const selectUserId = (state: RootState): number => state.id;
export const selectUserTasks = (state: RootState) => state.usersTasks;
