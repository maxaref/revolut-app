import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'store/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from 'store/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type IStore = ReturnType<typeof rootReducer>;
