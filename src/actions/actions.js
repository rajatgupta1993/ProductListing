import * as actionTypes from '../common/actionTypes';

export function fetchProducts() {
    return {
        type: actionTypes.FETCH_PRODUCTS,
    };
}

export function saveProducts(data){
    return{
        type: actionTypes.SAVE_PRODUCTS,
        data
    };
}


export function startLoading(){
    return {
        type: actionTypes.START_LOADING,
    };
}

export function stopLoading(){
    return {
        type: actionTypes.STOP_LOADING,
    };
}