import { createSlice } from '@reduxjs/toolkit';
import { claimTokens, initUserFromServer, taskCompleted } from '../operations';
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
  boosts: [],
  activeSkins: [],
  currentBoost: 0,
  completedTasks: [],
  usersTasks: {
    gaming: [
      {
        id: 151,
        name: 'Subscribe to Telegram',
        svg_url: '/assets/telegram-svgrepo-com.svg',
        task_bonus: 200,
        completed: false,
      },
      {
        id: 152,
        name: 'Subscribe to YouTube',
        svg_url: '/assets/youtube-svgrepo-com.svg',
        task_bonus: 200,
        completed: false,
      },
      {
        id: 153,
        name: 'Subscribe to X',
        svg_url: '/assets/twitter-x.svg',
        task_bonus: 200,
        completed: false,
      },
    ],
    partners: [
      {
        id: 154,
        name: 'Invite 1 friend',
        svg_url: '/assets/user.svg',
        task_bonus: 200,
        completed: false,
      },
      {
        id: 155,
        name: 'Invite 5 friends',
        svg_url: '/assets/users.svg',
        task_bonus: 200,
        completed: false,
      },
      {
        id: 156,
        name: 'Invite 10 friends',
        svg_url: '/assets/group-user.svg',
        task_bonus: 200,
        completed: false,
      },
    ],
    special: [],
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
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
        state.currentBoost = usersData.currentBoost;
        state.usersTasks = usersData.usersTasks;
      })
      .addCase(claimTokens.fulfilled, (state, action) => {
        state.tokens = action.payload.tokens;
      })
      .addCase(taskCompleted.fulfilled, (state, action) => {
        state.usersTasks = action.payload.userTasks;
      });
  },
});

export default userSlice.reducer;
