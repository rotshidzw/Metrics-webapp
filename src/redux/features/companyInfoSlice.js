import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getAllcomanyInfoData from '../../apis/companyInfoApi';
import companyInfoEffectCleanData from '../effects/companyInfoEffects';

export const fetchCompanyInfoData = createAsyncThunk(
  'companyInfo/fetchCompanyInfoData',
  getAllcomanyInfoData,
);

const companyInfoSlice = createSlice({
  name: 'companyInfo',

  initialState: {
    companyInfoData: [],
    status: 'idle',
  },

  reducers: {},

  extraReducers: {
    [fetchCompanyInfoData.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),

    [fetchCompanyInfoData.fulfilled]: (state, action) => ({
      ...state,
      status: 'complete',
      companyInfoData: companyInfoEffectCleanData(action),
    }),

    [fetchCompanyInfoData.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export default companyInfoSlice.reducer;
