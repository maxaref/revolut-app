import React  from 'react';
import styles from './styles.module.scss';

export interface INumberInputProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): any;
}

export const Button = (
  { children, disabled, className = '', type = 'button', onClick }: INumberInputProps
) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};