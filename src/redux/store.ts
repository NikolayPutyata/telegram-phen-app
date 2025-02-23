import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice/userSlice.ts';
import walletReducer from './walletSlice/walletSlice.ts';

const store = configureStore({
  reducer: {
    user: userReducer,
    wallet: walletReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
