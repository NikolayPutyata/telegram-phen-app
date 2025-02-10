import { createSlice } from '@reduxjs/toolkit';
import { claimTokens, initUserFromServer } from '../operations';
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
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initUserFromServer.fulfilled, (state, action) => {
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
    }).addCase(claimTokens.fulfilled, (state, action) => {
      state.tokens = action.payload.tokens
    });
  },
});

export default userSlice.reducer;
