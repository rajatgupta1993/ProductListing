import { call, put, takeEvery, all } from "redux-saga/effects";
import { saveProducts, startLoading, stopLoading } from "../actions/actions";
import * as actions from '../common/actionTypes';
import * as api from '../common/api';

export function* fetchProducts() {
  yield put(startLoading());
  let data = yield call(api.getProducts);
  console.log('data', data);
  yield put(stopLoading());
  yield put(saveProducts(data));
}


export function* watchActions() {
  yield takeEvery(actions.FETCH_PRODUCTS, fetchProducts);
}

export default function* rootSaga() {
  yield all([
    watchActions(),
  ]);
}
