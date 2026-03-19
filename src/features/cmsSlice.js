import { createSlice } from "@reduxjs/toolkit";

const cmsSlice = createSlice({
    name: "cms",
    initialState: null,
    reducers: {
        injectCMSData: (state, action) => {
            return action.payload;
        },
    },
});

const { actions, reducer } = cmsSlice;

export const { injectCMSData } = actions;

export default reducer;
