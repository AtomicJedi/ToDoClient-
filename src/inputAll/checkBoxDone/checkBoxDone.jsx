import React from 'react';
import './checkBoxDone.sass';

class TaskDone extends React.Component {
  render() {
    return (
        <form>
          <label>
              <input type="checkbox" className="TaskDone"/>
          </label>
        </form>
    );
  }
}
export default TaskDone