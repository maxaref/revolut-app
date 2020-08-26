import { combineReducers } from '@reduxjs/toolkit';
import { currenciesReducer } from 'features/Exchange/store';

export const rootReducer = combineReducers({
  currencies: currenciesReducer,
});
