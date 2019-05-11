import Types, { popularTypes } from '@model/actions/actionTypes'

const initialState = {
  // ['java']: {
  //   refresh_status: 'refreshing', // success fail 
  //   items: []
  // }
}

export default function onAction(state = initialState, action) {
  // action: {type: '', payload: {storeName: '', items: []}}
  switch (action.type) {
    case popularTypes['POPULAR_REFRESH']:
      return {
        ...state,
        [action.payload.storeName]: {
          ...state[action.payload.storeName],
          refresh_status: 'refreshing'
        }
      }
    case popularTypes['POPULAR_REFRESH_SUCCESS']:
      return {
        ...state,
        [action.payload.storeName]: {
          ...state[action.payload.storeName],
          items: action.payload.items || [],
          refresh_status: 'success'
        }
      }
    case popularTypes['POPULAR_REFRESH_FAIL']:
      return {
        ...state,
        [action.payload.storeName]: {
          ...state[action.payload.storeName],
          refresh_status: 'fail'
        }
      }
    default:
      return state
  }
}