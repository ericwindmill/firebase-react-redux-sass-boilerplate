export const DISPLAY_MESSAGE = 'DISPLAY_MESSAGE'

export const displayMessage = message => {
  return {
    type: DISPLAY_MESSAGE,
    message
  }
}
