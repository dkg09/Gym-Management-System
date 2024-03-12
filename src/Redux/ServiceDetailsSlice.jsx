import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";


export const FetchServiceDetailsData = createAsyncThunk('fetchservicedetails', async (_id) => {
    try {
        const res = await axiosInstance.get(`getservicedetails/${_id}`)
        return res;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    servicedetails_data: {},
    status: "success",
};

export const ServiceDetailsSlice = createSlice({
    name: "servicedetails",
    initialState,
    reducers: {

    },
    extraReducers: {
        [FetchServiceDetailsData.pending.type]: (state) => {
            state.status = "loading...";
            state.servicedetails_data = null;
        },
        [FetchServiceDetailsData.fulfilled.type]: (state, { payload }) => {
            state.status = 'success';
            state.servicedetails_data = payload;
        },
        [FetchServiceDetailsData.rejected.type]: (state) => {
            state.status = 'try again';
        },
    }
});