import { combineReducers } from 'redux'

import ConnectionReducer from './ConnectionReducer'
import AppReducer from './AppReducer'

export default combineReducers({
  ConnectionReducer,
  AppReducer
})
