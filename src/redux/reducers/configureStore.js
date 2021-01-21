import {applyMiddleware, createStore} from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const applied = applyMiddleware(thunk);
const composed = composeWithDevTools(applied);
export default function configureStore() {
  return createStore(rootReducer,undefined,composed)
}