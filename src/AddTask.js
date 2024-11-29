// AddTask.js
import React, { useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <div>
      <label htmlFor="task-input">Task</label>
      <input
        id="task-input"
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter a task"
      />
      <p>Current task: {task}</p>
    </div>
  );
};

export default AddTask;
