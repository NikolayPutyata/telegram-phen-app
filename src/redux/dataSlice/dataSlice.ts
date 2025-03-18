import { createSlice } from '@reduxjs/toolkit';
import { Boost, Skin } from '../../types/State';
import { getAllDataThunk } from '../operations';

interface dataState {
  commonBoosts: Boost[];
  skins: {
    commonCollection: Skin[];
    bronzeCollection: Skin[];
    silverCollection: Skin[];
    goldCollection: Skin[];
    platinumCollection: Skin[];
    diamondCollection: Skin[];
  };
}

const initialState: dataState = {
  commonBoosts: [],
  skins: {
    commonCollection: [],
    bronzeCollection: [],
    silverCollection: [],
    goldCollection: [],
    platinumCollection: [],
    diamondCollection: [],
  },
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllDataThunk.fulfilled, (state, action) => {
      state.skins = action.payload.skins;
      state.commonBoosts = action.payload.boosts.common;
    });
  },
});

export default dataSlice.reducer;
