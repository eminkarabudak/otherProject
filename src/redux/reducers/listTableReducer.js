import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'
export default function listTableReducer(state = initialState.listTable, action) {
  switch (action.type) {
    case actionTypes.GET_LIST_TABLE_DATA:
      return action.payload
      
    default:
      return state;
  }
}