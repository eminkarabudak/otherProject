import axios from 'axios'
import * as actionTypes from './actionTypes'

export function changeOperations(operation) {
  return{type:actionTypes.CHANGE_OPERATIONS,payload:operation}
}

export const getOperations = () => async dispatch =>{
  let url ="http://localhost:3004/organisations"
  try {
    const response = await axios.get(url)
    dispatch({
      type: actionTypes.GET_OPERATIONS_SUCCESS, payload: response.data
    })
  }
  catch (e) {
    dispatch({
      type: actionTypes.GET_OPERATIONS_ERROR,
      payload: console.log(e)
    })
  }
}

export const getOperationsName = () => async dispatch => {
  let url = "http://localhost:3004/organisationsName"
  try {
    const response = await axios.get(url)
    dispatch({
      type: actionTypes.GET_OPERATIONSNAME_SUCCESS, payload: response.data
    })
  }
  catch (e) {
    dispatch({
      type: actionTypes.GET_OPERATIONS_ERROR,
      payload: console.log(e),
    })
  }
}

