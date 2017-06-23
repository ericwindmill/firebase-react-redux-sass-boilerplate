import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div id='main' className={this.props.theme}>
        <h1>This is my app component.</h1>
      </div>
    )
  }
}

export default App
