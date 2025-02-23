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
  activeBoosts: [],
  boosts: [
    {
      id: 1,
      name: 'V3 Engine',
      boost_bonus: '0.02',
      boost_photo_url: '/assets/engine.webp',
    },
    {
      id: 2,
      name: 'Nitro',
      boost_bonus: '0.05',
      boost_photo_url: '/assets/commandor.webp',
    },
    {
      id: 3,
      name: 'V3 Engine',
      boost_bonus: '0.02',
      boost_photo_url: '/assets/shuttle-2.webp',
    },
    {
      id: 4,
      name: 'Nitro',
      boost_bonus: '0.05',
      boost_photo_url:
        'https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261763/family_kwki0h.webp',
    },
  ],
  activeSkins: [],
  currentBoost: 0,
  completedTasks: [],
  loading: false,
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
      })
      .addCase(claimTokens.fulfilled, (state, action) => {
        state.tokens = action.payload.tokens;
      })
      .addCase(taskCompleted.pending, (state) => {
        state.loading = true;
      })
      .addCase(taskCompleted.fulfilled, (state, action) => {
        state.loading = false;
        state.usersTasks = action.payload.userTasks;
      });
  },
});

export const { addBoostsToActive } = userSlice.actions;
export default userSlice.reducer;
