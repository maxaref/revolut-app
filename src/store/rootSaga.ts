import { all } from 'redux-saga/effects';
import { exchangeRootSaga } from 'features/Exchange/store/saga';

export function* rootSaga() {
  yield all([exchangeRootSaga()]);
}
