import { AuthSlice } from "../AuthSlice";
import { BlogDetailsSlice } from "../BlogDetailsSlice";
import { BlogSlice } from "../BlogSlice";
import { BookingSlice } from "../BookingSlice";
import { ContactSlice } from "../ContactSlice";
import { FetchBookingDetailsSlice } from "../DashBoardSlice";
import { HomeSlice } from "../HomeSlice";
import { ServiceDetailsSlice } from "../ServiceDetailsSlice";
import { ServiceSlice } from "../ServiceSlice";
import { TestimonialSlice } from "../TestimonialSlice";
import { TrainerSlice } from "../TrainerSlice";

const { configureStore } = require("@reduxjs/toolkit");

const Store = configureStore({

    reducer: {


        home: HomeSlice.reducer,
        trainer: TrainerSlice.reducer,
        testimonial: TestimonialSlice.reducer,
        service: ServiceSlice.reducer,
        servicedetails: ServiceDetailsSlice.reducer,
        blog: BlogSlice.reducer,
        blogdetails: BlogDetailsSlice.reducer,
        contact:ContactSlice.reducer,
        auth:AuthSlice.reducer,
        bookingData:BookingSlice.reducer,
        memberbooking:FetchBookingDetailsSlice.reducer

    }
})

export default Store