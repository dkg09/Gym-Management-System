import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";


export const FetchBlogData = createAsyncThunk('fetchblog', async () => {
    try {
        const res = await axiosInstance.get(`getblog`)
        return res?.data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    blog_data: [],
    status: "success",
};

export const BlogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {

    },
    extraReducers: {
        [FetchBlogData.pending.type]: (state) => {
            state.status = "loading...";
            state.blog_data = null;
        },
        [FetchBlogData.fulfilled.type]: (state, { payload }) => {
            state.status = 'success';
            state.blog_data = payload;
        },
        [FetchBlogData.rejected.type]: (state) => {
            state.status = 'try again';
        },
    }
});