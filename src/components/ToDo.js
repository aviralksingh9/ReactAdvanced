import React, { useState } from "react";
import "./ToDo.css";

const ToDo = function () {
  const [newTask, setNewTask] = useState(" ");
  const [taskList, setTaskList] = useState([]);
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    const newTodo = { id: Date.now(), text: newTask, isComplete: false };
    setTaskList([...taskList, newTodo]);
    setNewTask("");
  };
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  const toggleComplete = (id) => {
    setTaskList(
      taskList.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };
  const deleteTask = (id) => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };
  return (
    <div className="App">
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="add a new task"
          value={newTask}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {taskList.map((item) => {
          console.log(item);
          return (
            <li key={item.id}>
              <span
                className={item.isComplete ? "completed" : ""}
                onClick={() => toggleComplete(item.id)}
              >
                {item.text}
              </span>
              <button onClick={() => deleteTask(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDo;
