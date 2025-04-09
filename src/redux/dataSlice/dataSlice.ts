import { createSlice } from '@reduxjs/toolkit';
import { Boost, Skin, Case, Robot } from '../../types/State';
import { getAllDataThunk } from '../operations';

interface dataState {
  commonBoosts: Boost[];
  caseBoosts: Case[];
  robot: Robot[];
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
  caseBoosts: [],
  robot: [],
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
      state.caseBoosts = action.payload.caseBoosts;
      state.robot = action.payload.robot;
    });
  },
});

export default dataSlice.reducer;
