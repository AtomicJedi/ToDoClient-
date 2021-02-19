import React from 'react';
import './inputAdd.sass';
const axios = require('axios').default;

class InputAdd extends React.Component {
  state = {
    input: ''
  }

  addTask() {
    const { input } = this.state;
    if (input) {
      this.props.addTask(input);
      this.setState({ input: '' });
    }
  }

  handlChange = e => {
    e.preventDefault()
    this.setState({ input: e.target.value })
  }

  render() {
    const { input } = this.state;
    return (
      <form action="#"
        className="FormClassMain"
      >
        <label className="LabeleClass">
          <input
            type="text"
            name="name"
            className="InputAdd"
            value={input}
            onChange={this.handlChange}
          />

        </label>
        <button
          className="InputAddButton"
          onClick={() => this.addTask(this.getLists)}

        >
          Добавить
          </button>
      </form>
    )
  }
}




export default InputAdd
