import Types from '@model/actions/actionTypes'

const initialState = {
  count: 0
}

export default function onAction(state = initialState, action) {
  switch (action.type) {
    case Types['COUNTER_INCREASE']:
      return {
        ...state,
        count: state.count + action.payload.step,
      }
    case Types['COUNTER_DECREASE']:
      return {
        ...state,
        count: state.count - action.payload.step,
      }
    default:
      return state
  }
}