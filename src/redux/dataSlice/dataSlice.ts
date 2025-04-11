import { createSlice } from '@reduxjs/toolkit';
import { Boost, Skin, Case, Robot } from '../../types/State';
import { getAllDataThunk } from '../operations';

interface dataState {
  commonBoosts: Boost[];
  cases: Case[];
  robots: Robot[];
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
  cases: [],
  robots: [],
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
      state.cases = action.payload.cases;
      state.robots = action.payload.robots;
    });
  },
});

export default dataSlice.reducer;
