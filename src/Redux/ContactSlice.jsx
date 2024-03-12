import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";


export const FetchContactData = createAsyncThunk('Post/Contact', async (data) => {
    try {       
        const res = await axios.post('https://restapinodejs.onrender.com/api/contact/create',data)
        // toast("message sent");
        return res?.data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    contact_data: [],
    status: "success",
};

export const ContactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [FetchContactData.pending.type]: (state) => {
            state.status = "loading...";
            // state.contact_data = null;
        },
        [FetchContactData.fulfilled.type]: (state, { payload }) => {
            state.status = 'success';
            // state.contact_data = payload;
            toast("message sent")
        },
        [FetchContactData.rejected.type]: (state) => {
            state.status = 'try again';
            toast("error")
        },
    }
});