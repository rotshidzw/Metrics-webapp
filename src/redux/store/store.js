import { configureStore, combineReducers } from '@reduxjs/toolkit';
import stocksReducer from '../features/stocksSlice';
import companyInfoReducer from '../features/companyInfoSlice';

const reducer = combineReducers({
  stocks: stocksReducer,
  companyInfo: companyInfoReducer,
});

const store = configureStore({ reducer });

export default store;
