import { createSlice } from "@reduxjs/toolkit";

const regionSlice = createSlice({
    name: "region",
    initialState: null,
    reducers: {
        setRegion: (state, action) => {
            return action.payload;
        },
    },
});

const { actions, reducer } = regionSlice;

export const { setRegion } = actions;
export default reducer;
