import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../Api/AxiosInstance";


const initialState = {
  bookingStatus: 'idle'
};

export const booking = createAsyncThunk("booking", async (data) => {
  try {
    const response = await axiosInstance.post("booking", data);
    return response;
  } catch (error) {
    toast(error?.response?.data?.message)
  }
})

export const BookingSlice = createSlice({
  name: "bookingSevice",
  initialState,
  reducers: {},
  extraReducers: {
    [booking.pending]: (state) => {
      state.bookingStatus = 'submitting';
    },
    [booking.fulfilled]: (state, { payload }) => {
      if (payload?.status === 200) {
        state.bookingStatus = 'success';
        toast.success(payload?.message);
        toast.success("Congratulations! Training has been booked.");
      }
    },
    [booking.rejected]: (state) => {
      state.bookingStatus = 'failed';
    }
  }
})