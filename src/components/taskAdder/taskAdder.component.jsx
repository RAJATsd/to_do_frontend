import "./taskAdder.styles.css";
import React, { useState } from "react";
import axios from 'axios';
import {baseApiRoute} from '../../utils/apiRoute';

const TaskAdderComponent = ({addATask}) => {
  const [taskText, setTaskText] = useState("");
  const [taskPriority, setTaskPriority] = useState("low");

  const handleAddTask = async () => {
    if(taskText === '') return;
    try {
        const data = {taskText, taskPriority};
        const addTaskApiCall = await axios.post(baseApiRoute+'addTask',data);
        if(addTaskApiCall.data.success)
        {
            addATask(addTaskApiCall.data.data);
        }
        setTaskText('');
        setTaskPriority('low');
    }
    catch(e) {
        setTaskText('');
        setTaskPriority('low');
    }
  }

  return (
    <div className="task-adder-form-container">
      <div>
        <textarea
          rows="3"
          type="text"
          className="task-input"
          placeholder="Enter the task to be added"
          value={taskText}
          onChange={(evt) => setTaskText(evt.target.value)}
        />
      </div>
      <div className="priority-options-holder">
        <button
          type="button"
          className={`task-priority-button low ${
            taskPriority === "low" ? "selected" : ""
          }`}
          onClick={()=>setTaskPriority('low')}
        >
          Low
        </button>
        <button
          type="button"
          className={`task-priority-button medium ${
            taskPriority === "medium" ? "selected" : ""
          }`}
          onClick={()=>setTaskPriority('medium')}
        >
          Medium
        </button>
        <button
          type="button"
          className={`task-priority-button high ${
            taskPriority === "high" ? "selected" : ""
          }`}
          onClick={()=>setTaskPriority('high')}
        >
          High
        </button>
      </div>
      <div className="submit-button-holder">
          <button onClick={handleAddTask} className="add-task-submit-button">Add Task</button>
      </div>
    </div>
  );
};

export default TaskAdderComponent;
