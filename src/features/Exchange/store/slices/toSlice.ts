import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrenciesEnum } from 'features/Exchange/store/types';

export const toSlice = createSlice({
  name: 'to',
  initialState: null as CurrenciesEnum | null,
  reducers: {
    setTo: (_, action: PayloadAction<CurrenciesEnum>) =>
      action.payload,
  },
});

export const { setTo } = toSlice.actions;
