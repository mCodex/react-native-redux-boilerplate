import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import Api from '../lib/api';

import { GET_GOOGLE } from '../constants';

function* workerSetText() {
  const response = yield call(Api);
  console.log(response);
  yield put(actions.getGoogle(response));
}

function* watchTextChanges() {
  yield takeLatest(GET_GOOGLE, workerSetText);
}

export default function* root() {
  // yield watchTextChanges;
}
