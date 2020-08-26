import { combineReducers } from '@reduxjs/toolkit';
import { baseSlice } from './baseSlice';
import { ratesSlice } from './ratesSlice';

export const currenciesReducer = combineReducers({
  base: baseSlice.reducer,
  rates: ratesSlice.reducer,
});
