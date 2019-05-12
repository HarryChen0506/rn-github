import {onCounterIncrease,  onCounterDecrease} from './counter'
import {onPopularRefresh, onPopularLoadmore} from './popular'

export const popularActions = {
  onPopularRefresh,
  onPopularLoadmore
}

export default {
  onCounterIncrease,
  onCounterDecrease
}