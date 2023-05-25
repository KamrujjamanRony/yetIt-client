import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: [],
    blog: {},
};

const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        getBlogs: (state, action) => {
            state.blogs = action.payload;
        },
        getBlog: (state, action) => {
            state.blog = state.blogs.find(bl=>bl.id==action.payload);
        },
    },
});

export const {getBlogs, getBlog} = blogsSlice.actions;
export default blogsSlice.reducer;