import {popularTypes} from '@model/actions/actionTypes'
import fetchData from '@services/fetchData'
import popular_data from '@mock/popular'

// 刷新
export function popularRefresh({storeName}) {
  return {type: popularTypes['POPULAR_REFRESH'], payload: {storeName}}
}
export function popularRefreshSuccess({storeName, items, hasMore, pageNum, pageSize}) {
  return {type: popularTypes['POPULAR_REFRESH_SUCCESS'], payload: {storeName, items, hasMore, pageNum, pageSize}}
}
export function popularRefreshFail({storeName}) {
  return {type: popularTypes['POPULAR_REFRESH_FAIL'], payload: {storeName}}
}
export function onPopularRefresh ({storeName, pageNum, pageSize, sort, order}) {
  return function (dispatch) {
    dispatch(popularRefresh({storeName}))
    fetchData.popular.search({
      query: {
        q: storeName, 
        page: pageNum || 1, 
        per_page: pageSize || 10,
        sort: sort || 'stars',
        order: order || 'desc'
      }
    }).then(res => {
      console.log('fetch', res)
      const items = (res.result && res.result.items) || []
      const hasMore = !(res.result && res.result.incomplete_results)
      dispatch(popularRefreshSuccess({storeName, items, hasMore, pageNum, pageSize}))
    }).catch(error => {
      dispatch(popularRefreshFail({storeName}))
    })
  }
}

// 加载更多
export function popularLoadmore({storeName}) {
  return {type: popularTypes['POPULAR_LOADMORE'], payload: {storeName}}
}
export function popularLoadmoreSuccess({storeName, items, hasMore, pageNum, pageSize}) {
  return {type: popularTypes['POPULAR_LOADMORE_SUCCESS'], payload: {storeName, items, hasMore, pageNum, pageSize}}
}
export function popularLoadmoreFail({storeName}) {
  return {type: popularTypes['POPULAR_LOADMORE_FAIL'], payload: {storeName}}
}
export function onPopularLoadmore ({storeName, pageNum, pageSize, sort, order}) {
  return function (dispatch) {
    dispatch(popularLoadmore({storeName}))
    fetchData.popular.search({
      query: {
        q: storeName, 
        page: pageNum || 1, 
        per_page: pageSize || 10,
        sort: sort || 'stars',
        order: order || 'desc'
      }
    }).then(res => {
      console.log('fetch', res)
      const items = (res.result && res.result.items) || []
      const hasMore = !(res.result && res.result.incomplete_results)
      dispatch(popularLoadmoreSuccess({storeName, items, hasMore, pageNum, pageSize}))
    }).catch(error => {
      dispatch(popularLoadmoreFail({storeName}))
    })
  }
}