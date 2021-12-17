import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchCity from '../utils';

export const getCityThunk = createAsyncThunk('city/fetchCity', async () => {
  return fetchCity();
});

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    city: '',
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getCityThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCityThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.city = action.payload;
    },
  },
});

export default citySlice.reducer;
