import axios from 'axios';
import { CurrenciesEnum, ICurrenciesRates } from 'features/Exchange/store';

const appId = 'c60c828ed6d74eeaba7c5352582686bd';
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
