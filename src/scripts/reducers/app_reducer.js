import { DISPLAY_MESSAGE } from '../actions/app_actions'

let preloadedState = {
  message: 'Welcome to the FiRRS Stack!'
}

export const message = (state = preloadedState, action) => {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return action.message
    default:
      return state
  }
}
