import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.state.message = this.props.message
    console.log(this.state.message)
  }

  render () {
    
    return (
      <div>
        <h1>This is my app component.</h1>
        <button type='submit' onClick={this.handleClick} > Press Me!</button>
        <p> And Check the console! </p>
      </div>
    )
  }
}

export default App
