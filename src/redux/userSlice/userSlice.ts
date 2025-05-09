import { createSlice } from '@reduxjs/toolkit';
import {
  claimTokens,
  initUserFromServer,
  paymentInPhenerium,
  startFarming,
  taskCompleted,
  getBoostsAndSkins,
  addRefTgLink,
  sendPrize,
  claimSkinsBonus,
  buySkinInPhenerium,
} from '../operations';
import { UserState } from '../../types/State';

const initialState: UserState = {
  id: 0,
  username: '',
  first_name: '',
  photo_url: null,
  language_code: null,
  tokens: 0,
  friends: [],
  refLink: '',
  skins: [],
  activeBoosts: [],
  boosts: [],
  activeSkins: [],
  currentBoost: 0,
  completedTasks: [],
  farmingCycleInMilisec: 0,
  farmingCycle: 0,
  tokensToGet: 0,
  usersTasks: {
    gaming: [],
    partners: [],
    special: [],
  },
  skinsCollection: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addBoostsToActive: (state, action) => {
      state.activeBoosts = [...state.activeBoosts, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initUserFromServer.fulfilled, (state, action) => {
        const usersData: UserState = action.payload.data;
        state.id = usersData.id;
        state.username = usersData.username;
        state.first_name = usersData.first_name;
        state.photo_url = usersData.photo_url;
        state.language_code = usersData.language_code;
        state.tokens = usersData.tokens;
        state.friends = usersData.friends;
        state.refLink = usersData.refLink;
        state.skins = usersData.skins;
        state.boosts = usersData.boosts;
        state.activeSkins = usersData.activeSkins;
        state.activeBoosts = usersData.activeBoosts;
        state.currentBoost = usersData.currentBoost;
        state.usersTasks = usersData.usersTasks;
        state.farmingCycle = usersData.farmingCycle;
        state.skinsCollection = usersData.skinsCollection;
      })
      .addCase(claimSkinsBonus.fulfilled, (state, action) => {
        state.skinsCollection = action.payload.skinsCollection;
        state.tokens = action.payload.tokens;
      })
      .addCase(buySkinInPhenerium.fulfilled, (state, action) => {
        state.skinsCollection = action.payload.skinsCollection;
        state.tokens = action.payload.tokens;
      })
      .addCase(claimTokens.fulfilled, (state, action) => {
        state.activeBoosts = action.payload.activeBoosts;
        state.tokens = action.payload.tokens;
      })
      .addCase(taskCompleted.fulfilled, (state, action) => {
        state.usersTasks = action.payload.userTasks;
      })
      .addCase(addRefTgLink.fulfilled, (state, action) => {
        state.refLink = action.payload.link;
      })
      .addCase(startFarming.fulfilled, (state, action) => {
        state.boosts = action.payload.boosts;
        state.activeBoosts = action.payload.activeBoosts;
        state.farmingCycleInMilisec = action.payload.farmingCycleInMilisec;
        state.farmingCycle = action.payload.farmingCycle;
        state.tokensToGet = action.payload.tokensToGet;
      })
      .addCase(paymentInPhenerium.fulfilled, (state, action) => {
        state.tokens = action.payload.data.tokens;
        state.boosts = action.payload.data.boosts;
        state.skins = action.payload.data.skins;
      })
      .addCase(getBoostsAndSkins.fulfilled, (state, action) => {
        state.boosts = action.payload.boosts;
        state.skins = action.payload.skins;
      })
      .addCase(sendPrize.fulfilled, (state, action) => {
        state.tokens = action.payload.tokens;
        state.boosts = action.payload.boosts;
        state.skinsCollection = action.payload.skinsCollection;
      });
  },
});

export const { addBoostsToActive } = userSlice.actions;
export default userSlice.reducer;
