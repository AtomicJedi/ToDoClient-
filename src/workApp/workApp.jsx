import React from 'react';
import TaskList from './../taskList/taskList.jsx';
import './workApp.sass';

class WorkApp extends React.Component {

  render() {
    return (
      <div className="appFrame">
        <div className="appFrameMain">
          <div className="BoxtaskListFrame">
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}
export default WorkApp