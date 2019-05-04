import Types from '@model/actions/actionTypes'

export function onCounterIncrease(step) {
  return {type: Types.COUNTER_INCREASE, payload: {step}}
}
export function onCounterDecrease(step) {
  return {type: Types.COUNTER_DECREASE, payload: {step}}
}
