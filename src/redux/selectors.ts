import { RootState } from "./store";

export const selectUserTokens = (state: RootState) : number => state.tokens;
export const selectUserUsername = (state: RootState) : string => state.username;
export const selectUserFriends = (state: RootState) : object[]  => state.friends;