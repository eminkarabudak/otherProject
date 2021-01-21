import {combineReducers} from "redux"
import changeOperationReducer from "./changeOperationReducer"
import operationListReducer from "./operationListReducer"
import organisationNameListReducer from "./organisationNameListReducer"
import listTableReducer from "./listTableReducer"
 const rootReducer=combineReducers({
   changeOperationReducer,
   operationListReducer,
   organisationNameListReducer,
   listTableReducer
 })

 export default rootReducer;