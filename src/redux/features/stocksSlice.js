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
    isLoading: false,
  },

  reducers: {},

  extraReducers: {
    [fetchStocksData.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [fetchStocksData.fulfilled]: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        stocksData: stocksEffectCleanData(action),
      };
    },

    [fetchStocksData.rejected]: (state) => ({ ...state, isLoading: false }),
  },
});

export default stocksSlice.reducer;
