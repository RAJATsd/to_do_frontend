import "./singleTask.styles.css";
import React from "react";
import { baseApiRoute } from "../../utils/apiRoute";
import axios from "axios";

const SingleTaskComponent = ({ taskInfo }) => {
  const changeTaskStatus = async () => {
    await axios.get(baseApiRoute + "taskStatus/change/" + taskInfo._id);
  };

  return (
    <div className="single-task-container">
      <div className="task-text-info">{taskInfo.taskText}</div>
      <div className="priority-and-status-holder">
        <div className={`task-priority-chip ${taskInfo.taskPriority}`}>{taskInfo.taskPriority}</div>
        <div>
          <input
            defaultChecked={taskInfo.taskCompleted}
            onClick={changeTaskStatus}
            type="checkbox"
            className="task-status-checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleTaskComponent;
