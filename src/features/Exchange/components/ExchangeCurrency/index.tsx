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
    <div className={styles.title}>{currency}</div>
    <div className={styles.balance}>
      You have
      {' '}
      {signByCurrency[currency]}
      {balance}
    </div>
  </div>
);