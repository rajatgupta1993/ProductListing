import * as actionTypes from '../common/actionTypes';
const initialState = {
    products: {},
    isLoading: false
};

export default function hoemReducer(state=initialState, action){

    switch(action.type){

        case actionTypes.SAVE_PRODUCTS : return {...state, products: action.data};

        default: return state;
    }
}