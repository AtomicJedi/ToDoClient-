import React from 'react';
import './subTask.sass';
import TaskDone from '../../inputAll/checkBoxDone/checkBoxDone.jsx'
import ButtonUpSub from './../../buttons/buttonsNavigationSub/buttonUpSub/buttonUpSub.jsx'
import ButtonDownSub from './../../buttons/buttonsNavigationSub/buttonDownSub/buttonDownSub.jsx';

const SubTask = ({
  subTextIn: subText,
  deleteSub: DeleteSubTask,
  onDownBtn,
  onUpBtn,

}) => {
  return (
    <div addTask className="SubTaskFrameBox">
      <div className="SubTaskMain">
        <div className="funcBoxSub">
          <ButtonUpSub moveUp={onUpBtn} />
          <ButtonDownSub moveDown={onDownBtn} />
          <div className="SubBtnCheckBox">
            <TaskDone />
            <button
              className="ButtonDelTask"
              onClick={DeleteSubTask}
            >
              <h3>&#215;</h3>

            </button>
          </div>
        </div>

        <span className="SubTextTasks">
          {subText.title}
        </span>
      </div>
    </div>

  );
}


export default SubTask
