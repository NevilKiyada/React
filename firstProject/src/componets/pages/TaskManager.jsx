import React, { useState } from "react";

export default function TaskManager() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [idx, setIdx] = useState(null);
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    let newTask = { id: Date.now(), task, priority, completed: false };
    setTasks([...tasks, newTask]);
    setTask("");
    setPriority("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const handleComplete = (id) => {
    setTasks(tasks.map((item) => (item.id === id ? { ...item, completed: true } : item)));
  };

  const handleEdit = (id) => {
    const editTask = tasks.find((item) => item.id === id);
    setTask(editTask.task);
    setPriority(editTask.priority);
    setIdx(id);
  };

  const handleUpdate = () => {
    setTasks(tasks.map((item) => (item.id === idx ? { ...item, task, priority } : item)));
    setTask("");
    setPriority("");
    setIdx(null);
  };

  return (
    <div>
      <label>Enter your task:</label>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} /> <br />

      <label>Enter priority:</label>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <br />

      <button onClick={idx !== null ? handleUpdate : handleSubmit}>{idx !== null ? "Update" : "Add Task"}</button>

      <table border="2" width="80%">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Task</th>
            <th>Priority</th>
            <th>Status</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((e, i) => (
            <tr key={e.id}>
              <td>{i + 1}</td>
              <td>{e.task}</td>
              <td>{e.priority}</td>
              <td>{e.completed ? "Completed" : "Pending"}</td>
              <td>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleEdit(e.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleComplete(e.id)} disabled={e.completed}>Mark as Complete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
