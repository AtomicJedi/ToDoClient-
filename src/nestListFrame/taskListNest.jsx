import React from 'react';
import InputAddSab from './../inputAll/inputAddSab/inputAddSab.jsx'
import SabTask from './../nestListFrame/sabTask/sabTask.jsx';
import ButtonAllDone from './../buttons/buttonAllDone/buttonAllDone.jsx'
import './taskListNest.sass'


class TaskListNest extends React.Component {
  state = {
    tasks: [],
  }

  addTask = (task) => {
    this.setState(({ tasks }) => (
      { tasks: [...tasks, { id: tasks.length, title: task }] }))
  }

  deleteSabTask = (index) => {
    const arr = [...this.state.tasks];
    arr.splice(index, 1);
    this.setState({ tasks: arr })
  }

  onUpBtnSab = (index) => {
    let arr = [...this.state.tasks];
    arr.splice(index - 1, 0, arr.splice(index, 1)[0])
    this.setState({ tasks: arr })
  }

  onDownBtnSab = (index) => {
    let arr = [...this.state.tasks];
    arr.splice(index + 1, 0, arr.splice(index, 1)[0])
    this.setState({ tasks: arr })
  }

  taskAllDone = () => {
    const arr = [this.state];
    arr.splice(0);
    this.setState({ tasks: arr })
  }

  render() {
    console.log(this.state.tasks)
    return (
      <div className="appFrameNestList">
        { this.state.tasks.map((task, id) => (
          <SabTask
            onDownBtn={() => { this.onDownBtnSab(id) }}
            onUpBtn={() => { this.onUpBtnSab(id) }}
            index={id}
            key={id}
            deleteSab={() => { this.deleteSabTask(id) }}

            sabTextIn={task}
          />))}
        <InputAddSab
          addTask={this.addTask}
        />
        {this.state.tasks.length === 0 ?
          <ButtonAllDone allDone={() => { this.taskAllDone() }} /> === null
          : <ButtonAllDone allDone={() => { this.taskAllDone() }} />}
      </div>

    );
  }
}
export default TaskListNest
