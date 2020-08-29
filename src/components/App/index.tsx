import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ExchangeScreen } from 'features/Exchange/components/ExchangeScreen';

export const App = () => (
  <Provider store={store}>
    <ExchangeScreen />
  </Provider>
);
