import { combineReducers } from 'redux'
import { message } from './app_reducer'
// import your other reducers here...

const RootReducer = combineReducers({
  message
})

export default RootReducer
