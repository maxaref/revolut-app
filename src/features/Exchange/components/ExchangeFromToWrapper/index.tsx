import React, { useCallback, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classNames from 'classnames';
import { CurrenciesEnum, IBalance } from 'features/Exchange/store';
import { ExchangeCurrency } from 'features/Exchange/components/ExchangeCurrency';
import styles from './styles.module.scss';

export interface IExchangeFromToWrapperProps {
  isFrom?: boolean;
  children?: (currency: CurrenciesEnum) => React.ReactNode;
  currencies: CurrenciesEnum[];
  balanceByCurrency: IBalance;
  onCurrencyChange(value: CurrenciesEnum): any;
}

export const ExchangeFromToWrapper = ({ children, currencies, balanceByCurrency, onCurrencyChange, isFrom }: IExchangeFromToWrapperProps) => {
  const onChangeHandler = useCallback((index: number) => onCurrencyChange(currencies[index]), [onCurrencyChange, currencies]);

  useEffect(() => {
    onCurrencyChange(currencies[0]);
  }, []);

  return (
    <Carousel
      className={classNames(styles.wrapper, { [styles.wrapper__from]: isFrom })}
      emulateTouch
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      onChange={onChangeHandler}
    >
      {currencies.map(currency => (
        <div
          key={currency}
          className={styles.item}
        >
          <div className={styles.insideWrapper}>
            <ExchangeCurrency
              currency={currency}
              balance={balanceByCurrency[currency]}
            />

            {children && children(currency)}
          </div>
        </div>
      ))}
    </Carousel>
  );
};