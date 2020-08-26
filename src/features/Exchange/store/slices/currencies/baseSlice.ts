import { createSlice } from '@reduxjs/toolkit';
import { CurrenciesEnum } from 'features/Exchange/store/types';

// We can't choose base currency with test API, so, it will be always USD
export const baseSlice = createSlice({
  name: 'base',
  initialState: CurrenciesEnum.USD,
  reducers: {},
});
