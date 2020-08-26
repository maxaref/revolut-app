import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ICurrenciesRates } from 'features/Exchange/store';

export const ratesSlice = createSlice({
  name: 'rates',
  initialState: null as ICurrenciesRates | null,
  reducers: {
    setCurrenciesRates: (_, action: PayloadAction<ICurrenciesRates>) =>
      action.payload,
  },
});

export const { setCurrenciesRates } = ratesSlice.actions;
