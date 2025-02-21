import { Friend } from '../types/State';
import { RootState } from './store';

export const selectUserTokens = (state: RootState): number => state.user.tokens;
export const selectUserUsername = (state: RootState) => state.user.username;
export const selectUserFirstName = (state: RootState) => state.user.first_name;
export const selectUserBoosts = (state: RootState) => state.user.boosts;
export const selectUserFriends = (state: RootState): Friend[] =>
  state.user.friends;
export const selectUserId = (state: RootState): number => state.user.id;
export const selectUserTasks = (state: RootState) => state.user.usersTasks;
export const selectUserTonBalance = (state: RootState) => state.wallet.balance;
export const selectIsLoading = (state: RootState) => state.user.loading;
