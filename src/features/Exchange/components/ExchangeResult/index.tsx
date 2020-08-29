import React from 'react';
import { CurrenciesEnum } from 'features/Exchange/store';
import { signByCurrency } from 'services/Currencies';
import styles from './styles.module.scss';


export interface IExchangeCurrencyProps {
  currencyFrom: CurrenciesEnum;
  currencyTo: CurrenciesEnum;
  amount?: number;
  ratio: number;
}

export const ExchangeResult = ({ currencyFrom, currencyTo, amount, ratio }:IExchangeCurrencyProps) => (
  <div className={styles.wrapper}>
    <div className={styles.result}>
      <span className="tests__result">
        {amount ? (
          <>
            +
            {(amount / ratio).toFixed(2)}
          </>
        ) : null}
      </span>

      &nbsp;
    </div>
    <div className={styles.ratio}>
      {`${signByCurrency[currencyTo]}1 = ${signByCurrency[currencyFrom]}`}
      <span className="tests__ratio">{ratio.toFixed(2)}</span>
    </div>
  </div>
);