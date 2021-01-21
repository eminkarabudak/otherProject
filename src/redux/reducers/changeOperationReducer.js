import * as actionTypes from '../actions/actionTypes'
import initialState from '../reducers/initialState'
export default function changeOperationReducer(state=initialState.currentOperation,action) {
  switch (action.type) {
    case actionTypes.CHANGE_OPERATIONS:
      return action.payload
    default:
      return state;
  }
}