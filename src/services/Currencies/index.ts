import { CurrenciesEnum, ICurrenciesRates } from 'features/Exchange/store';

export const signByCurrency: Record<CurrenciesEnum, string> = {
  GBP: '£',
  EUR: '€',
  USD: '$',
};

export const getRatio = (from: CurrenciesEnum, to: CurrenciesEnum, base: CurrenciesEnum, rates: ICurrenciesRates) => {
  if (base === from) return 1 / rates[to];
  if (base === to) return rates[from];

  // we don't have API access for custom base currency
  return 1 / rates[to] * rates[from];
};