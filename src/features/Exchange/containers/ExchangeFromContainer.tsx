import React, { useCallback } from 'react';
import { ExchangeFromToWrapper } from 'features/Exchange/components/ExchangeFromToWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from 'store';
import { NumberInput } from 'components/Form/NumberInput';
import { getRatio } from 'services/Currencies';
import { formatNumber } from 'utils/formatNumber';
import { arrCurrencies, CurrenciesEnum, setFrom, setAmount, updateBalance } from 'features/Exchange/store';
import { ExchangeButton } from 'features/Exchange/components/ExchangeButton';


export const ExchangeFromContainer = () => {

  const { from, to, balance, amount, currencies } = useSelector((state: IStore) => ({
    balance: state.exchange.balance,
    amount: state.exchange.amount,
    from: state.exchange.from,
    to: state.exchange.to,
    currencies: state.exchange.currencies,
  }));

  const dispatch = useDispatch();

  const onCurrencyChange = useCallback((newCurrency: CurrenciesEnum) => {
    if (newCurrency && newCurrency !== from) dispatch(setAmount(0));
    dispatch(setFrom(newCurrency));
  }, [dispatch, from]);

  const onAmountChange = useCallback((value: number) => dispatch(setAmount(value)), [dispatch]);
  const onExchange = useCallback(() => {
    if (!from || !to || !currencies.rates) return;

    const ratio = getRatio(from, to, currencies.base, currencies.rates);

    dispatch(updateBalance({
      [from]: formatNumber(balance[from] - amount),
      [to]: formatNumber(balance[to] + amount / ratio),
    }));
    dispatch(setAmount(0));
  }, [dispatch, balance, amount, currencies, from, to]);


  return (
    <>
      <ExchangeButton
        disabled={!amount || from === to}
        onClick={onExchange}
      />

      <ExchangeFromToWrapper
        isFrom
        currencies={arrCurrencies}
        balanceByCurrency={balance}
        onCurrencyChange={onCurrencyChange}
      >
        {(slideCurrency) => {
          if (slideCurrency !== from) return null;

          return (
            <NumberInput
              autoFocus
              autoWidth
              value={amount}
              onChange={onAmountChange}
              min={0}
              max={balance[slideCurrency]}
              preffix={amount ? '-' : undefined}
              decimals={2}
            />
          );
        }}
      </ExchangeFromToWrapper>

    </>
  );
};