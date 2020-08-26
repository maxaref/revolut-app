import axios from 'axios';
import { CurrenciesEnum, ICurrenciesRates } from 'features/Exchange/store';

const appId = '4ffe283b81ca45029d18b624e8dcff99';
const currencies = Object.values(CurrenciesEnum);

export const getRates = (base: CurrenciesEnum) =>
  axios
    .get<{ rates: ICurrenciesRates }>(
      'https://openexchangerates.org/api/latest.json',
      {
        params: {
          app_id: appId,
          symbols: currencies.join(','),
        },
      }
    )
    .then((res) => res.data.rates);
