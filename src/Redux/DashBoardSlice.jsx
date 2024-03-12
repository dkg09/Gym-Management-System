import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";





export const FetchBookingDetails = createAsyncThunk('fetchbookingdetails', async (id) => {
    try {
        const res = await axiosInstance.get(`viewBooking/${id}`);
        return res

    } catch (error) {
        console.log(error);
    }
})
 


const initialState = {
    booking_details: [],
    status: "idle",
}

export const FetchBookingDetailsSlice = createSlice({
    name: "bookingdetails",
    initialState,
    reducers: {
    },
    extraReducers: {
        [FetchBookingDetails.pending.type]: (state) => {
            state.status = "loading..."
            state.booking_details = null
        },
        [FetchBookingDetails.fulfilled]: (state, { payload }) => {
            if (payload?.status === 200) {
                state.status = "success"
                state.booking_details = payload
            }
        },
        [FetchBookingDetails.rejected]: (state) => {
            state.status = "Try Again"
        }
    }
})

