import { createSlice } from "@reduxjs/toolkit";
import { initUserFromServer } from "../operations";

const initialState = {
  id: null,
  username: "",
  photo_url: "",
  language_code: "",
  tokens: 0,
  friends: []
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initUserFromServer.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.photo_url = action.payload.photo_url;
      state.language_code = action.payload.language_code;
      state.tokens = action.payload.tokens;
      state.friends = action.payload.friends;
    });
  },
});

export default userSlice.reducer;
