import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://telegram-phen-app-server-scjhs.ondigitalocean.app/';

export const initUserFromServer = createAsyncThunk(
  'user/fetchUser',
  async (user: object, thunkAPI) => {
    try {
      const { data } = await axios.post('user/initUser', user);
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      }
      return thunkAPI.rejectWithValue('Unknown error');
    }
  },
);

export const startFarming = createAsyncThunk(
  'farm/farmStart',
  async (
    { id, boostsIdsArray }: { id: number; boostsIdsArray: number[] },
    { rejectWithValue },
  ) => {
    try {
      const { data } = await axios.post('farm/farmStart', {
        id,
        boostsIds: boostsIdsArray,
      });
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
);

export const claimTokens = createAsyncThunk(
  'farm/claimTokens',
  async (userId: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('farm/claimTokens', { id: userId });
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
);

export const taskCompleted = createAsyncThunk(
  'farm/taskCompleted',
  async (
    { userId, taskId }: { userId: number; taskId: number },
    { rejectWithValue },
  ) => {
    try {
      const { data } = await axios.post('tasks/completed', {
        id: userId,
        taskId,
      });
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
);

export const getAllDataThunk = createAsyncThunk(
  'data/getAllData',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('data/getAllData');
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
);

export const paymentInPhenerium = createAsyncThunk(
  'payment/payment-in-phenerium',
  async (
    { memo, amount }: { memo: string; amount: number },
    { rejectWithValue },
  ) => {
    try {
      const { data } = await axios.post('payment/payment-in-phenerium', {
        memo,
        amount,
      });
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
);

export const checkChatMember = async (userId: number, channelId: string) => {
  const data = await axios.post('tasks/getChatMember', { userId, channelId });
  return data;
};

export const getBoostsAndSkins = createAsyncThunk(
  'user/getBoostsAndSkins',
  async (userId: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('user/getBoostsAndSkins', {
        userId: userId,
      });
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
);

export const addRefTgLink = createAsyncThunk(
  'user/addRefTgLink',
  async (
    { userId, link }: { userId: number; link: string },
    { rejectWithValue },
  ) => {
    try {
      const { data } = await axios.post('user/addRefTgLink', {
        id: userId,
        link,
      });
      return { link: data.link };
    } catch (e: unknown) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
);

export const sendPrize = createAsyncThunk(
  'user/sendPrize',
  async (
    {
      userId,
      boostId,
      collectionId,
    }: { userId: number; boostId: number; collectionId: number },
    { rejectWithValue },
  ) => {
    try {
      const { data } = await axios.post('user/sendPrize', {
        userId,
        boostId,
        collectionId,
      });
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
);
