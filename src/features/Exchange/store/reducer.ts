import { combineReducers } from '@reduxjs/toolkit';
import { fromSlice } from './slices/fromSlice';
import { toSlice } from './slices/toSlice';
import { balanceSlice } from './slices/balanceSlice';
import { baseSlice } from './slices/currencies/baseSlice';
import { ratesSlice } from './slices/currencies';
import { amountSlice } from './slices/amountSlice';

export const currenciesReducer = combineReducers({
  base: baseSlice.reducer,
  rates: ratesSlice.reducer,
});

export const exchangeReducer = combineReducers({
  currencies: currenciesReducer,
  from: fromSlice.reducer,
  to: toSlice.reducer,
  balance: balanceSlice.reducer,
  amount: amountSlice.reducer,
});
