import { api } from 'services/Api';
import { select, put, delay } from 'redux-saga/effects';
import type { IStore } from 'store';
import { setCurrenciesRates } from './slices/currencies/ratesSlice';

export function* updateCurrenciesRates() {
  try {
    const baseCurrency = yield select((store: IStore) => store.currencies.base);
    const rates = yield api.currencies.getRates(baseCurrency);

    yield put(setCurrenciesRates(rates));
  } catch (error) {
    console.error(error);
  }
}

const updateAfter = 10000;

export function* updateCurrenciesRatesInterval() {
  while (true) {
    yield updateCurrenciesRates();
    yield delay(updateAfter);
  }
}

export function* exchangeRootSaga() {
  yield updateCurrenciesRatesInterval();
}
