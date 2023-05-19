import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    collapseName: 'Costs',
};

const collapseSlice = createSlice({
    name: "collapse",
    initialState,
    reducers: {
        activeCollapse: (state, action) => {
            state.collapseName = action.payload;
        },
    },
});

export const {activeCollapse} = collapseSlice.actions;
export default collapseSlice.reducer;