import React from 'react'

export default class About extends React.Component {
  state = {
    displayErr: '',
    value: ''
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.value === '') {
      return
    }

    //FETCH

    // end FETCH

    alert('A name was submitted: ' + this.state.value)
    //clear value
    this.setState({ value: '' })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit">HAMOOO</button>
        {this.state.displayErr}
      </form>
    )
  }
}
