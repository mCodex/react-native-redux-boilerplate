import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'; //eslint-disable-line

import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import rootReducer from '../reducers';

export const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

if (__DEV__) {
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      offline(offlineConfig)
    )
  );
  return store;
}
