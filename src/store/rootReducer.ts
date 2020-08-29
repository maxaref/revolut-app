import { combineReducers } from '@reduxjs/toolkit';
import { exchangeReducer } from 'features/Exchange/store';

export const rootReducer = combineReducers({
  exchange: exchangeReducer,
});
