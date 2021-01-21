import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'
export default function organisationNameListReducer(state = initialState.operationsName, action) {
  switch (action.type) {
    case actionTypes.GET_OPERATIONSNAME_SUCCESS:
      return action.payload
    default:
      return state;
  }
}