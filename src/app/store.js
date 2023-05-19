import { configureStore } from '@reduxjs/toolkit';
import collapseReducer from '../features/collapse/collapseSlice';

export const store = configureStore({
  reducer: {
    collapse: collapseReducer,
  },
});
