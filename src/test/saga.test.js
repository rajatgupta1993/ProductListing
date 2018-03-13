import sagaHelper from 'redux-saga-testing/main';
import { call, put } from 'redux-saga/effects';
import * as sagaMethods from '../sagas/saga';
import * as actionTypes from '../common/actionTypes';
import * as Api from '../common/api';

const startAction = () => ({ type: actionTypes.START_LOADING });
const stopAction = () => ({ type: actionTypes.STOP_LOADING });

describe('async Actions:-Fetch All Products', () => {
    const it = sagaHelper(sagaMethods.fetchProducts());
    const expectedAction = () => ({ type: actionTypes.SAVE_PRODUCTS, });
    it('should have dispatch action to start loading', (result) => {
        expect(result).toEqual(put(startAction()));
    });
    it('should have called the api', (result) => {
        expect(result).toEqual(call(Api.getProducts));
    });
     it('should have dispatch action to stop loading', (result) => {
        expect(result).toEqual(put(stopAction()));
    });
    it('and then trigger an action', (result) => {
        expect(result).toEqual(put(expectedAction()));
    });
});