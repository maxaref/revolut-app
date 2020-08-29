import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrenciesEnum } from 'features/Exchange/store/types';

export const fromSlice = createSlice({
  name: 'from',
  initialState: null as CurrenciesEnum | null,
  reducers: {
    setFrom: (_, action: PayloadAction<CurrenciesEnum>) =>
      action.payload,
  },
});

export const { setFrom } = fromSlice.actions;
