import {popularTypes} from '@model/actions/actionTypes'
import popular_data from '@mock/popular'

export function popularRefresh({storeName}) {
  return {type: popularTypes['POPULAR_REFRESH'], payload: {storeName}}
}
export function popularRefreshSuccess({storeName, items}) {
  return {type: popularTypes['POPULAR_REFRESH_SUCCESS'], payload: {storeName, items}}
}
export function popularRefreshFail({storeName}) {
  return {type: popularTypes['POPULAR_REFRESH_FAIL'], payload: {storeName}}
}

export function onPopularRefresh ({storeName, page, size}) {
  return function (dispatch) {
    dispatch(popularRefresh({storeName}))
    setTimeout(() => {
      console.log('请求。。。。')
      const items = popular_data.items.slice(0, 10)
      console.log('请求。。。。', items)
      dispatch(popularRefreshSuccess({storeName, items}))
    }, 2000)
  }
}
