import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'
export default function operationListReducer(state = initialState.operations, action) {
  switch (action.type) {
    case actionTypes.GET_OPERATIONS_SUCCESS:
      return action.payload
    default:
      return state;
  }
}