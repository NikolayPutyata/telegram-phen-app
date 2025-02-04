import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://telegram-phen-app-server-0kju.onrender.com/user"; 

export const initUserFromServer = createAsyncThunk(
  "user/fetchUser",
  async (user: object, thunkAPI) => { 
    try {
      const { data } = await axios.post("/initUser", user);
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);
