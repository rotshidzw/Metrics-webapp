import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getStocksData from '../../apis/stocksApi';
import stocksEffectCleanData from '../effects/stocksEffects';

export const fetchStocksData = createAsyncThunk(
  'stocks/fetchStocksData',
  getStocksData,
);

const stocksSlice = createSlice({
  name: 'stocks',

  initialState: {
    stocksData: [],
    status: 'idle',
  },

  reducers: {},

  extraReducers: {
    [fetchStocksData.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),

    [fetchStocksData.fulfilled]: (state, action) => ({
      ...state,
      status: 'complete',
      stocksData: stocksEffectCleanData(action),
    }),

    [fetchStocksData.rejected]: (state) => ({ ...state, status: 'failed' }),
  },
});

export default stocksSlice.reducer;
