import { configureStore } from '@reduxjs/toolkit';
import audioReducer from "../Redux/Features/audioSlice"
export default configureStore({
  reducer: {
    audio:audioReducer,
  },
});