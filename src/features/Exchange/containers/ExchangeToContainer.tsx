import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from 'store';
import { getRatio } from 'services/Currencies';
import { arrCurrencies, CurrenciesEnum, setTo } from 'features/Exchange/store';
import { ExchangeFromToWrapper } from 'features/Exchange/components/ExchangeFromToWrapper';
import { ExchangeResult } from 'features/Exchange/components/ExchangeResult';



export const ExchangeToContainer = () => {
  const { balance, from, to, amount, currencies } = useSelector((state: IStore) => ({
    balance: state.exchange.balance,
    from: state.exchange.from,
    to: state.exchange.to,
    amount: state.exchange.amount,
    currencies: state.exchange.currencies,
  }));

  const dispatch = useDispatch();
  const onChange = useCallback((currency: CurrenciesEnum) => dispatch(setTo(currency)), [dispatch]);

  return (
    <ExchangeFromToWrapper
      currencies={arrCurrencies}
      balanceByCurrency={balance}
      onCurrencyChange={onChange}
    >
      {(slideCurrency) => {
        if (
          !from || !to || from === to
          || slideCurrency !== to
          || !currencies.rates
        ) return null;

        return (
          <ExchangeResult
            currencyFrom={from}
            currencyTo={to}
            amount={amount}
            ratio={getRatio(from, to, currencies.base, currencies.rates)}
          />
        );
      }}
    </ExchangeFromToWrapper>
  );
};