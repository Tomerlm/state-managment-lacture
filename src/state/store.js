import { configureStore } from '@reduxjs/toolkit';
import answersReducer from './answersReducer';
import cityReducer from './citySlice';

export default configureStore({
  reducer: {
    answersReducer,
    cityReducer,
  },
});
