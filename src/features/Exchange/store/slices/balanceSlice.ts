import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBalance } from 'features/Exchange/store/types';

export const balanceSlice = createSlice({
  name: 'balance',
  initialState: { USD: 0, GBP: 100, EUR: 0 },
  reducers: {
    updateBalance: (state, action: PayloadAction<Partial<IBalance>>) => ({ ...state, ...action.payload }),
  },
});

export const { updateBalance } = balanceSlice.actions;
