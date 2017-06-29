import { connect } from 'react-redux'
import App from './App'
import { displayMessage } from '../actions/app_actions'

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayMessage: (message) => dispatch(displayMessage(message))
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer