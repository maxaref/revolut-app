import React, { useCallback, useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
import { formatNumber } from 'utils/formatNumber';
import styles from './styles.module.scss';


export interface INumberInputProps {
  value?: number;
  min?: number;
  max?: number;
  decimals?: number;
  autoFocus?: boolean;
  preffix?: string;
  className?: string;
  autoWidth?: boolean;
  onChange(value: number): any;
}

export const NumberInput = (
  { value = 0, min, max, decimals, preffix, className = '', autoWidth, autoFocus, onChange }: INumberInputProps
) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [insideValue, setInsideValue] = useState(value.toString());

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newStringValue = e.target.value.replace(',', '.');

    if (isNaN(Number(newStringValue))) return;

    let newValue = parseFloat(newStringValue);

    if (decimals && newValue) newValue = formatNumber(newValue, decimals);

    if (min !== undefined) newValue = Math.max(min, newValue);
    if (max !== undefined) newValue = Math.min(max, newValue);

    if (!newValue) newValue = 0;

    if (parseFloat(newStringValue) !== newValue) setInsideValue(newValue.toString());
    else setInsideValue(newStringValue);

    onChange(newValue);
  }, [decimals, onChange]);


  const focus = useCallback(() => {
    if (!inputRef.current) return;
    inputRef.current.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!autoFocus) return;
    focus();
  }, []);

  useEffect(() => {
    if (!autoWidth || !inputRef.current) return;

    let width = insideValue !== '0' ? insideValue.toString()?.length + 1 : 1;
    if (insideValue.toString().includes('.')) width -= 0.5;

    inputRef.current.style.width = `${width}ch`;
  }, [insideValue, autoWidth]);

  useEffect(() => {
    if (value !== parseFloat(insideValue)) {
      setInsideValue(value.toString());
      focus();
    }
  }, [insideValue, value]);

  return (
    <div>
      {preffix && <span className={styles.input}>{preffix}</span>}
      <input
        ref={inputRef}
        className={classnames(styles.input, className)}
        type="text"
        value={parseFloat(insideValue) !== 0 ? insideValue : ''}
        onChange={onChangeHandler}
      />
    </div>
  );
};