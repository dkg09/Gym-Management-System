import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";


export const FetchBlogDetailsData = createAsyncThunk('fetchblogdetails', async (_id) => {
    try {
        const res = await axiosInstance.get(`getblogdetails/${_id}`)
        return res;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    blogdetails_data: {},
    status: "success",
};

export const BlogDetailsSlice = createSlice({
    name: "blogdetails",
    initialState,
    reducers: {

    },
    extraReducers: {
        [FetchBlogDetailsData.pending.type]: (state) => {
            state.status = "loading...";
            state.blogdetails_data = null;
        },
        [FetchBlogDetailsData.fulfilled.type]: (state, { payload }) => {
            state.status = 'success';
            state.blogdetails_data = payload;
        },
        [FetchBlogDetailsData.rejected.type]: (state) => {
            state.status = 'try again';
        },
    }
});