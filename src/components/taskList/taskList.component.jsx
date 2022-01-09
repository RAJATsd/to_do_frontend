import "./taskList.styles.css";
import React, { useState } from "react";

import SingleTaskComponent from "../singleTask/singleTask.component";

const TaskListComponent = ({ allTasks }) => {
  const [showSortedList, setShowSortedList] = useState(false);
  const taskToRender = showSortedList
    ? [...allTasks].sort((firstEl, secEl) => {
        if (firstEl.taskPriority === "low") {
          return 1;
        } else if (firstEl.taskPriority === "medium") {
          if (secEl.taskPriority === "low") {
            return -1;
          } else {
            return 1;
          }
        } else return -1;
      })
    : allTasks;

  return (
    <div className="task-list-container">
      <button className={`sort-option-button ${showSortedList?'sorted':''}`} onClick={() => setShowSortedList(!showSortedList)}>
        Sort By Priority
      </button>
      {taskToRender.map((singleTask) => (
        <div key={singleTask._id} className="single-task">
          <SingleTaskComponent taskInfo={singleTask} />
        </div>
      ))}
    </div>
  );
};

export default TaskListComponent;
