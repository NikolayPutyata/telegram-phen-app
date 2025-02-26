import { createSlice } from '@reduxjs/toolkit';
import { claimTokens, initUserFromServer, startFarming, taskCompleted } from '../operations';
import { UserState } from '../../types/State';

const initialState: UserState = {
  id: 0,
  username: '',
  first_name: '',
  photo_url: null,
  language_code: null,
  tokens: 0,
  friends: [],
  skins: [],
  activeBoosts: [],
  boosts: [],
  activeSkins: [],
  currentBoost: 0,
  completedTasks: [],
  loading: false,
  farmingCycle: 0,
  tokensToGet: 0,
  usersTasks: {
    gaming: [],
    partners: [],
    special: [],
  },
  
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
        state.skins = usersData.skins;
        state.boosts = usersData.boosts;
        state.activeSkins = usersData.activeSkins;
        state.activeBoosts = usersData.activeBoosts;
        state.currentBoost = usersData.currentBoost;
        state.usersTasks = usersData.usersTasks;
        state.farmingCycle = usersData.farmingCycle;
      })
      .addCase(claimTokens.fulfilled, (state, action) => {
        state.activeBoosts = action.payload.activeBoosts;
        state.tokens = action.payload.tokens;
      })
      .addCase(taskCompleted.pending, (state) => {
        state.loading = true;
      })
      .addCase(taskCompleted.fulfilled, (state, action) => {
        state.loading = false;
        state.usersTasks = action.payload.userTasks;
      })
      .addCase(startFarming.fulfilled, (state, action) => {
        state.boosts = action.payload.boosts;
        state.activeBoosts = action.payload.activeBoosts;
        state.farmingCycle = action.payload.farmingCycle;
        state.tokensToGet = action.payload.tokensToGet;
      });
  },
});

export const { addBoostsToActive } = userSlice.actions;
export default userSlice.reducer;
