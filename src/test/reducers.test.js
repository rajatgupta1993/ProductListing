import homeReducer from '../reducers/homeReducer';
import * as actionTypes from '../common/actionTypes';


const initialState = {
    products: {},
    isLoading: false
}

describe('Root  reducer', () => {
    it('should return the initial state', () => {
        expect(homeReducer(initialState, {})).toEqual({

            products: {},
            isLoading: false
        })
    })

    it('should handle SAVE_PRODUCTS action', () => {

        const data = [{
            "itemId": 5,
            "itemTitle": "Sony Cyber-shot DSC-W830/BC Point & Shoot Camera(Black)",
            "rating": 4.5,
            "price": 8500,
            "emiPrice": 352,
            "itemImage": "../src/image/cam5.jpg",
            "features": "['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']"
        },
        {
            "itemId": 6,
            "itemTitle": "Sony Cyber-shot DSC-W830/BC Point & Shoot Camera(Black)",
            "rating": 2.5,
            "price": 6000,
            "emiPrice": 352,
            "itemImage": "../src/image/cam6.jpg",
            "features": "['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']"
        },
        ]
        expect(
            homeReducer(initialState, {
                type: actionTypes.SAVE_PRODUCTS,
                data
            })
        ).toEqual(
            {
                isLoading: false,
                products: [{
                    "itemId": 5,
                    "itemTitle": "Sony Cyber-shot DSC-W830/BC Point & Shoot Camera(Black)",
                    "rating": 4.5,
                    "price": 8500,
                    "emiPrice": 352,
                    "itemImage": "../src/image/cam5.jpg",
                    "features": "['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']"
                },
                {
                    "itemId": 6,
                    "itemTitle": "Sony Cyber-shot DSC-W830/BC Point & Shoot Camera(Black)",
                    "rating": 2.5,
                    "price": 6000,
                    "emiPrice": 352,
                    "itemImage": "../src/image/cam6.jpg",
                    "features": "['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']"
                },]

            })
    })
    
     it('should set the loading state to TRUE ', () => {
        expect(homeReducer(initialState, {
            type: actionTypes.START_LOADING
        })).toEqual({

            products: {},
            isLoading: true
        })
    })

     it('should set the loading state to FALSE ', () => {
        expect(homeReducer(initialState, {
            type: actionTypes.STOP_LOADING
        })).toEqual({

            products: {},
            isLoading: false
        })
    })


})