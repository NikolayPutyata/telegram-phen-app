import { createSlice } from "@reduxjs/toolkit";
import { Boost } from "../../types/State";
import { getAllBoostsThunk } from "../operations";

interface dataState {
    commonBoosts: Boost[]
    
}

const initialState: dataState = {
    commonBoosts: [],
    

};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllBoostsThunk.fulfilled, (state, action) => {
            
            state.commonBoosts = action.payload.data.common;
        })
    }
});

export default dataSlice.reducer;