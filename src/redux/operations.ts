import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://telegram-phen-app-server-scjhs.ondigitalocean.app/user';

export const initUserFromServer = createAsyncThunk(
  'user/fetchUser',
  async (user: object, thunkAPI) => {
    try {
      const { data } = await axios.post('/initUser', user);
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      }
      return thunkAPI.rejectWithValue('Unknown error');
    }
  },
);

// export const startFarming = createAsyncThunk(
//   'farm/startFarming',
//   async (
//     { id, boostMultiplier }: { id: number; boostMultiplier: number },
//     { rejectWithValue },
//   ) => {
//     try {
//       await axios.post('/farmStart', { id, boostMultiplier });
//       return { id, boostMultiplier };
//     } catch (e: unknown) {
//       if (e instanceof Error) {
//         return rejectWithValue(e.message);
//       }
//       return rejectWithValue('Unknown error');
//     }
//   },
// );


// export const claimTokens = createAsyncThunk(
//   'farm/claimTokens',
//   async (id: number, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/claimTokens', { id });
//       return response.data;
//     } catch (e: unknown) {
//       if (e instanceof Error) {
//         return rejectWithValue(e.message);
//       }
//       return rejectWithValue('Unknown error');
//     }
//   },
// );
