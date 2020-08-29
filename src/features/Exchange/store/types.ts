export enum CurrenciesEnum {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}

export const arrCurrencies = Object.values(CurrenciesEnum);

export type ICurrenciesRates = Record<CurrenciesEnum, number>;


export type IBalance = Record<CurrenciesEnum, number>;