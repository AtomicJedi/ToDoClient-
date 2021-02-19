import React from 'react';
import InputAdd from './../inputAll/inputAdd/inputAdd.jsx';
import TaskFrame from './../taskFrame/taskFrame.jsx';
import './taskList.sass';
const axios = require('axios').default;

class TaskList extends React.Component {
  state = {
    tasks: []
  }

  addTask = async (task) => {
    console.log(this.state.tasks)
    axios.post('http://localhost:5000/', {
      title: task
    })
      .then(response => console.log(response))
      .then(res => {
        (res = { status: 200 }) ? this.setState(({ tasks }) =>
          ({ tasks: [...tasks, { id: tasks.length, title: task }] })) : console.log("я хз что там... Но status точно не 200!")
      })
      .then(response => console.log(response))
      .then(error => {
        const err = new Error('Что-то пошло не так')
        err.data = error
      }
      )
  }

  deleteTask = (index) => {
    axios.delete('http://localhost:5000/')
      .then(response => console.log(response))
      .then(err => console.log(err))
    const arr = [...this.state.tasks];
    console.log(index)
    arr.splice(index, 1);
    this.setState({ tasks: arr })
  }

  onUpBtn = (index) => {
    let arr = [...this.state.tasks];
    arr.splice(index - 1, 0, arr.splice(index, 1)[0])
    this.setState({ tasks: arr })
  }

  onDownBtn = (index) => {
    let arr = [...this.state.tasks];
    arr.splice(index + 1, 0, arr.splice(index, 1)[0])
    this.setState({ tasks: arr })
  }

  getLists = () => {
    axios.get('http://localhost:5000/')
      .then(response => {
        response.data.map(title => response.data ? this.setState(({ tasks }) => ({ tasks: [...tasks, { ...title }] })) : console.log("State is empty"));
      })

      .then(err => err)
  }

  componentDidMount() {
    this.getLists()
  }

  render() {
    console.log()
    return (

      <div className="taskListFrame">

        { this.state.tasks.map((task, id) => (

          <TaskFrame
            onDownBtn={() => { this.onDownBtn(id) }}
            onUpBtn={() => { this.onUpBtn(id) }}
            index={id}
            key={id}
            deleteTask={() => { this.deleteTask(id) }}
            textIn={task}
          />
        ))}
        <InputAdd
          addTask={this.addTask}
        />
      </div>
    );
  }
}


export default TaskList;
