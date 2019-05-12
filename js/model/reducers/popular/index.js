import Types, { popularTypes } from '@model/actions/actionTypes'

const initialState = {
  // ['java']: {
  //   refresh_status: 'refreshing', // success fail 
  //   items: []
  //   hasMore: true
  //   loadmore_status: 'success',
  //   pageNum: 0,
  //   pageSize: 0,
  //   sort: 'desc',
  //   order: 'stars',
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
          refresh_status: 'refreshing',
          hasMore: false
        }
      }
    case popularTypes['POPULAR_REFRESH_SUCCESS']:
      return {
        ...state,
        [action.payload.storeName]: {
          ...state[action.payload.storeName],
          items: action.payload.items || [],
          refresh_status: 'success',
          hasMore: action.payload.hasMore,
          pageNum: action.payload.pageNum,
          pageSize: action.payload.pageSize,
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
    case popularTypes['POPULAR_LOADMORE']:
      return {
        ...state,
        [action.payload.storeName]: {
          ...state[action.payload.storeName],
          loadmore_status: 'loading',
        }
      }
    case popularTypes['POPULAR_LOADMORE_SUCCESS']:
      return {
        ...state,
        [action.payload.storeName]: {
          ...state[action.payload.storeName],
          items:[...(state[action.payload.storeName].items || []), ...(action.payload.items || [])],
          loadmore_status: 'success',
          hasMore: action.payload.hasMore,
          pageNum: action.payload.pageNum,
          pageSize: action.payload.pageSize,
        }
      }
    case popularTypes['POPULAR_LOADMORE_FAIL']:
      return {
        ...state,
        [action.payload.storeName]: {
          ...state[action.payload.storeName],
          loadmore_status: 'fail',
        }
      }
    default:
      return state
  }
}