import { put, takeLatest, call, all, fork } from 'redux-saga/effects';
import * as actions from '../actions';
import Api from '../lib/api';


function* workerSetStatus() {
  const { status } = yield call(Api);
  yield put({ type: 'GET_GOOGLE_SUCCESS', status });
}

function* watchSetStatus() {
  yield takeLatest('GET_GOOGLE', workerSetStatus);
}

export default function* root() {
  yield all([fork(watchSetStatus)]);
}
