import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";


export const FetchTestimonialData = createAsyncThunk('fetchtestimonial', async (data) => {
    try {
        const res = await axiosInstance.get(`gettestimonial`, data)
        return res?.data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    testimonial_data: [],
    status: "success",
};

export const TestimonialSlice = createSlice({
    name: "testimonial",
    initialState,
    reducers: {

    },
    extraReducers: {
        [FetchTestimonialData.pending.type]: (state) => {
            state.status = "loading...";
            state.testimonial_data = null;
        },
        [FetchTestimonialData.fulfilled.type]: (state, { payload }) => {
            state.status = 'success';
            state.testimonial_data = payload;
        },
        [FetchTestimonialData.rejected.type]: (state) => {
            state.status = 'try again';
        },
    }
});