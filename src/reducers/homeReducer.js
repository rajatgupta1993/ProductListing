import * as actionTypes from '../common/actionTypes';
const initialState = {
    products: {},
    isLoading: false
};

export default function hoemReducer(state=initialState, action){

    switch(action.type){

        case actionTypes.SAVE_PRODUCTS : return {...state, products: action.data};

        case actionTypes.START_LOADING : return {...state, isLoading: true} ;

        case actionTypes.STOP_LOADING : return {...state, isLoading: false} ;


        default: return state;
    }
}