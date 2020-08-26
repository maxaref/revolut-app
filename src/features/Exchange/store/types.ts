export enum CurrenciesEnum {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}

export type ICurrenciesRates = Record<CurrenciesEnum, number>;
