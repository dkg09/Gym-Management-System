import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";


export const FetchTrainerData = createAsyncThunk('fetchtrainer', async (data) => {
    try {
        const res = await axiosInstance.get(`gettrainer`, data)
        return res?.data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    trainer_data: [],
    status: "success",
};

export const TrainerSlice = createSlice({
    name: "trainer",
    initialState,
    reducers: {

    },
    extraReducers: {
        [FetchTrainerData.pending.type]: (state) => {
            state.status = "loading...";
            state.trainer_data = null;
        },
        [FetchTrainerData.fulfilled.type]: (state, { payload }) => {
            state.status = 'success';
            state.trainer_data = payload;
        },
        [FetchTrainerData.rejected.type]: (state) => {
            state.status = 'try again';
        },
    }
});