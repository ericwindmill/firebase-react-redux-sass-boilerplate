import '../styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import reducers from './reducers/root_reducer.js'
import AppContainer from './components/AppContainer'

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  ) 
}

export default Root
