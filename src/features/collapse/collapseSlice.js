import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    collapseName: 'Costs',
    menuName: 'home',
};

const collapseSlice = createSlice({
    name: "collapse",
    initialState,
    reducers: {
        activeCollapse: (state, action) => {
            state.collapseName = action.payload;
        },
        activeMenu: (state, action) => {
            state.menuName = action.payload;
        },
    },
});

export const {activeCollapse, activeMenu} = collapseSlice.actions;
export default collapseSlice.reducer;