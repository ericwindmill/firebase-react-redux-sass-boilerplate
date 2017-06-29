import { DISPLAY_MESSAGE } from '../actions/app_actions'

const defaultMessage = {
  message: 'Welcome to the FiRRS Stack!'
}

const appReducer = (state = defaultMessage, action) => {
  Object.freeze(state)
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return Object.assign({}, action.message)
    default:
      return state
  }
}

export default appReducer