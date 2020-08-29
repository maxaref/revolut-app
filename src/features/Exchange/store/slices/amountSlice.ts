import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const amountSlice = createSlice({
  name: 'amount',
  initialState: 0,
  reducers: {
    setAmount: (_, action: PayloadAction<number>) => action.payload,
  },
});

export const { setAmount } = amountSlice.actions;
