import { configureStore } from "@reduxjs/toolkit";
import cmsReducer from "@/features/cmsSlice";
import regionReducer from "@/features/regionSlice";

const store = configureStore({
    reducer: {
        cms: cmsReducer,
        region: regionReducer,
    },
});

export default store;
