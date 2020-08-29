import React from 'react';
import { Button } from 'components/Button';
import styles from './styles.module.scss';

export interface IExchangeButtonProps { 
  disabled?: boolean;
  onClick(): any;
}

export const ExchangeButton = ({ disabled, onClick }: IExchangeButtonProps) => (
  <Button
    className={`tests__exchangeButton ${styles.exchangeButton}`}
    disabled={disabled}
    onClick={onClick}
  >
    Exchange
  </Button>

);