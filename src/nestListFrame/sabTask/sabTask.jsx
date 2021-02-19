import React from 'react';
import './sabTask.sass';
import TaskDone from './../../inputAll/checkBoxDone/checkBoxDone.jsx'
import ButtonUpSab from './../../buttons/buttonsNavigationSab/buttonUpSab/buttonUpSab.jsx'
import ButtonDownSab from './../../buttons/buttonsNavigationSab/buttonDownSab/buttonDownSab.jsx';

const SabTask = ({
  sabTextIn: sabText,
  deleteSab: DeleteSabTask,
  onDownBtn,
  onUpBtn,

}) => {
  return (
    <div className="SabTaskFrameBox">
      <div className="SabTaskMain">
        <div className="funcBoxSab">
          <ButtonUpSab moveUp={onUpBtn} />
          <ButtonDownSab moveDown={onDownBtn} />
          <div className="SabBtnCheckBox">
            <TaskDone />
            <button
              className="ButtonDelTask"
              onClick={DeleteSabTask}
            >
              <h3>&#215;</h3>

            </button>
          </div>
        </div>

        <span className="SabTextTasks">
          {sabText.title}
        </span>
      </div>
    </div>

  );
}


export default SabTask
