import * as actions from '../actions/actions'
import * as actionTypes from '../common/actionTypes'

describe('actions', () => {
  it('should create an action to fetch data , action with type FETCH_PRODUCTS', () => {
  
    const expectedAction = {
      type: actionTypes.FETCH_PRODUCTS,
    }
    expect(actions.fetchProducts()).toEqual(expectedAction)
  })

  it('should create an action to save data from API call,action with type SAVE_PRODUCTS', () => {
    const text = 'Data From API'
    const expectedAction = {
      type: actionTypes.SAVE_PRODUCTS,
      data : text
    }
    expect(actions.saveProducts(text)).toEqual(expectedAction)
  })

  it('should create an action to show Loader, action with type START_LOADING', () => {
    const expectedAction = {
      type: actionTypes.START_LOADING,
    }
    expect(actions.startLoading()).toEqual(expectedAction)
  })

  it('should create an action to hide Loader, action with type STOP_LOADING', () => {
    const expectedAction = {
      type:actionTypes.STOP_LOADING,
    }
    expect(actions.stopLoading()).toEqual(expectedAction)
  })

})
