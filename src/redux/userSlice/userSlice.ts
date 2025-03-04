import { createSlice } from '@reduxjs/toolkit';
import { claimTokens, initUserFromServer, paymentInPhenerium, startFarming, taskCompleted } from '../operations';
import { UserState } from '../../types/State';

const initialState: UserState = {
  id: 0,
  username: '',
  first_name: '',
  photo_url: null,
  language_code: null,
  tokens: 0,
  friends: [{id: 1, name: 'Victor'}],
  skins: [],
  activeBoosts: [],
  boosts: [],
  activeSkins: [],
  currentBoost: 0,
  completedTasks: [],
  farmingCycle: 0,
  tokensToGet: 0,
  usersTasks: {
    gaming: [
      {
        id: 151,
        name: "Subscribe to Telegram",
        svg_url: "/assets/telegram-svgrepo-com.svg",
        task_bonus: 200,
        completed: false,
        channelId: '-4653767745'
      },
      {
        id: 152,
        name: "Subscribe to YouTube",
        svg_url: "/assets/youtube-svgrepo-com.svg",
        task_bonus: 200,
        completed: false,
        channelId: '-222222'
      },
      {
        id: 153,
        name: "Subscribe to X",
        svg_url: "/assets/twitter-x.svg",
        task_bonus: 200,
        completed: false,
        channelId: '-1111111'
      },
    ],
    partners: [
      {
        id: 154,
        name: "Invite 1 friend",
        svg_url: "/assets/user.svg",
        task_bonus: 200,
        completed: false,
      },
      {
        id: 155,
        name: "Invite 5 friends",
        svg_url: "/assets/users.svg",
        task_bonus: 200,
        completed: false,
      },
      {
        id: 156,
        name: "Invite 10 friends",
        svg_url: "/assets/group-user.svg",
        task_bonus: 200,
        completed: false,
      },
    ],
    special: [
      ],
  },
  // usersTasks: {
  //   gaming: [],
  //   partners: [],
  //   special: [],
  // },
  
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
      .addCase(taskCompleted.fulfilled, (state, action) => {
        state.usersTasks = action.payload.userTasks;
      })
      .addCase(startFarming.fulfilled, (state, action) => {
        state.boosts = action.payload.boosts;
        state.activeBoosts = action.payload.activeBoosts;
        state.farmingCycle = action.payload.farmingCycle;
        state.tokensToGet = action.payload.tokensToGet;
      })
      .addCase(paymentInPhenerium.fulfilled, (state, action) => {
        state.tokens = action.payload.data.tokens;
        state.boosts = action.payload.data.boosts;
        state.skins = action.payload.data.skins;
      });
  },
});

export const { addBoostsToActive } = userSlice.actions;
export default userSlice.reducer;
