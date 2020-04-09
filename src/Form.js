import React, { Component } from 'react'

class Form extends Component {
  initialState = {
    name: '',
    numberOf: 0,
  }
  state = this.initialState

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  submitForm = () => {
    this.props.addFurniture(this.state)
    this.setState(this.initialState)
  }

  render() {
    const{ name, numberOf} = this.state
    return(
      <>
        <h2>備品を追加</h2>
        <form>
          <label htmlFor="name">備品名</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange} />
          <label htmlFor="job">個数</label>
          <input
            type="number"
            name="numberOf"
            id="numberOf"
            value={numberOf}
            onChange={this.handleChange} />
          <input type="button" value="追加" onClick={this.submitForm} />
        </form>
      </>
    )
  }
}

export default Form