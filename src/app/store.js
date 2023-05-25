import { configureStore } from '@reduxjs/toolkit';
import collapseReducer from '../features/collapse/collapseSlice';
import blogsReducer from '../features/blogs/blogsSlice';

export const store = configureStore({
  reducer: {
    collapse: collapseReducer,
    blogs: blogsReducer,
  },
});
