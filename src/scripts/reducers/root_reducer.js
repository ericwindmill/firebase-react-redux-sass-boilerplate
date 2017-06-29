import { combineReducers } from 'redux'
import appReducer from './app_reducer'
// import your other reducers here...

const RootReducer = combineReducers({
  message: appReducer
})

export default RootReducer
