import React from 'react';
import { CurrenciesEnum } from 'features/Exchange/store';
import { signByCurrency } from 'services/Currencies';
import styles from './styles.module.scss';

export interface IExchangeCurrencyProps {
  currency: CurrenciesEnum;
  balance: number;
}

export const ExchangeCurrency = ({ currency, balance }:IExchangeCurrencyProps) => (
  <div>
    <div className={`tests__currency ${styles.title}`}>{currency}</div>
    <div className={styles.balance}>
      You have
      {' '}
      {signByCurrency[currency]}
      <span className="tests__balance">{balance}</span>
    </div>
  </div>
);