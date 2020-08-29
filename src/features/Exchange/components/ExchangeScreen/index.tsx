import React from 'react';
import { ExchangeFromContainer } from 'features/Exchange/containers/ExchangeFromContainer';
import { ExchangeToContainer } from 'features/Exchange/containers/ExchangeToContainer';

export const ExchangeScreen = () => (
  <>
    <ExchangeFromContainer />
    <ExchangeToContainer />
  </>
);
