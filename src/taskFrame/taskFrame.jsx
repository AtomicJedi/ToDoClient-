import React from 'react';
import './taskFrame.sass';
import ButtonAddNestingList from './../buttons/buttonAddNestingList/buttonAddNestingList.jsx'
import NestListFrame from './../nestListFrame/taskListNest.jsx'
import ButtonDown from './../buttons/buttonsNavigation/buttonDown/buttonDown.jsx';
import ButtonUp from './../buttons/buttonsNavigation/buttonUp/buttonUp.jsx'
import TaskDone from './../inputAll/checkBoxDone/checkBoxDone.jsx'

class TaskFrame extends React.Component {
  state = {
    sabTaskOn: null,
  }

  handlSabTaskAdd = sabTaskOn => {
    this.setState({ sabTaskOn })
  }

  render() {
    console.log(this.props.tasks)
    return (
      <div className="TaskFrameBox">
        <div className="TaskMain">
          <div className="funcBox">
            <ButtonUp stepUp={this.props.onUpBtn} />
            <ButtonDown stepDown={this.props.onDownBtn} />
            <div className="BtnCheckBox">
              <TaskDone />
              <button
                className="ButtonDelTask"
                onClick={this.props.deleteTask}
              >
                <h3>&#215;</h3>

              </button>

            </div>
          </div>

          <p className="TextTasks">
            {this.props.textIn.title}
          </p>
          <div className="BtnNest">
            <ButtonAddNestingList
              onClick={this.handlSabTaskAdd}
            />
          </div>
        </div>

        <div className="SabTask">
          {this.state.sabTaskOn ? <NestListFrame task={this.state.sabTaskOn} /> : null}
        </div>
      </div>

    );
  }
}

export default TaskFrame
