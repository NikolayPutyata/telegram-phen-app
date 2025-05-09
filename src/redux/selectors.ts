import { Friend } from '../types/State';
import { RootState } from './store';

export const selectUserTokens = (state: RootState): number => state.user.tokens;
export const selectUserUsername = (state: RootState) => state.user.username;
export const selectUserFirstName = (state: RootState) => state.user.first_name;
export const selectUserBoosts = (state: RootState) => state.user.boosts;
export const selectUserActiveBoosts = (state: RootState) =>
  state.user.activeBoosts;
export const selectUserFriends = (state: RootState): Friend[] =>
  state.user.friends;
export const selectRefLink = (state: RootState) => state.user.refLink;
export const selectUserFriendsQuantity = (state: RootState): number =>
  state.user.friends.length;
export const selectUserId = (state: RootState): number => state.user.id;
export const selectUserTasks = (state: RootState) => state.user.usersTasks;
export const selectUserTonBalance = (state: RootState) => state.wallet.balance;
export const selectFarmingCycle = (state: RootState) => state.user.farmingCycle;
export const selectTokensToGet = (state: RootState) => state.user.tokensToGet;
export const selectCommonBoosts = (state: RootState) => state.data.commonBoosts;
export const selectUserSkins = (state: RootState) => state.user.skins;
export const selectSkins = (state: RootState) => state.data.skins;
export const selectCases = (state: RootState) => state.data.cases;
export const selectRobots = (state: RootState) => state.data.robots;
export const selectSkinsCollection = (state: RootState) => state.user.skinsCollection;
