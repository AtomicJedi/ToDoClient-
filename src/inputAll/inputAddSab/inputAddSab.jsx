import React from 'react';
import './inputAddSab.sass';

class InputAdd extends React.Component {
  state = {
    input: ''
  }

  addTask = () => {
    const { input } = this.state;
    if(input) {
      this.props.addTask(input);
      this.setState({ input: '' });
    }
  }

  handlChange = e => {
    e.preventDefault()
    this.setState({input: e.target.value})
  }

  render(){
    const {input} = this.state;
    return (
        <form  
              className="FormClass"
        >
          <label className="LabeleClass">
            <input 
              type="text" 
              name="name"  
              className="InputAddSab"
              value={input}
              onChange={this.handlChange}
            />
            <button
            className="InputAddButton"
            onClick={this.addTask}
            >
            Добавить
            </button>
          </label>

      </form>

  
     
    );
  }
} 


export default InputAdd