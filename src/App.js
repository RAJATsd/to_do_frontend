import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import TaskAdderComponent from "./components/taskAdder/taskAdder.component";
import TaskListComponent from "./components/taskList/taskList.component";
import { baseApiRoute } from "./utils/apiRoute";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const fetchAllTasks = async () => {
    try {
      const fetchAllTasks = await axios.get(baseApiRoute + "allTasks");
      if (fetchAllTasks.data.success) {
        setAllTasks(fetchAllTasks.data.data);
      }
    } catch (e) {
      return;
    }
  };

  const addATask = (taskInfo) => {
    const newAllTasks = [...allTasks,taskInfo];
    setAllTasks(newAllTasks);
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <div className="App">
      <div className="task-adder-and-list-holder">
        <TaskAdderComponent addATask={addATask} />
        <TaskListComponent allTasks={allTasks} />
      </div>
    </div>
  );
}

export default App;
