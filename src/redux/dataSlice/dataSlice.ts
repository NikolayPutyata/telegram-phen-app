import { createSlice } from '@reduxjs/toolkit';
import { Boost, Skin } from '../../types/State';
import { getAllDataThunk } from '../operations';

interface dataState {
  commonBoosts: Boost[];
  skins: Skin[];
}

const initialState: dataState = {
  commonBoosts: [],
  skins: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllDataThunk.fulfilled, (state, action) => {
      state.skins = action.payload.skins.bronzeCollection;
      state.commonBoosts = action.payload.boosts.common;
    });
  },
});

export default dataSlice.reducer;
