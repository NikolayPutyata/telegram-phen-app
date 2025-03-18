import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TonState {
  balance: number | null;
}

const initialState: TonState = {
  balance: null,
};

const tonSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setBalance(state, action: PayloadAction<number>) {
      state.balance = action.payload;
    },
  },
});

export const { setBalance } = tonSlice.actions;
export default tonSlice.reducer;
