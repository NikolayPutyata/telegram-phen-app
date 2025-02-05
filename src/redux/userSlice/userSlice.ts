import { createSlice } from '@reduxjs/toolkit';
import { initUserFromServer } from '../operations';
import { UserState } from '../../types/State';

const initialState: UserState = {
  id: null,
  username: '',
  photo_url: null,
  language_code: null,
  // tokens: 0,
  // friends: []
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
      state.photo_url = usersData.photo_url;
      state.language_code = usersData.language_code;
      // state.tokens = usersData.tokens;
      // state.friends = usersData.friends;
    });
  },
});

export default userSlice.reducer;
