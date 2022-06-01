import { createContext, useState } from 'react';

export const TasksContext = createContext({
  tasks: [],
  selectedTask: {},
});

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState([]);

  // CRUD Actions
  // 1.Get Tasks
  const getTasks = async () => {
    try {
      const response = await fetch('http://localhost:3001/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  // 2.Create Tasks
  const createTask = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const item = await response.json();
      setTasks((prev) => [...prev, item]);
    } catch (err) {
      console.log(err);
    }
  };

  // 3.Delete Task
  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'DELETE',
      });

      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // 4. Update Task
  const updateTask = async (id, newTask) => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      const data = await response.json();

      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, ...data } : task
      );
      setTasks(updatedTasks);
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    tasks,
    selectedTask,
    setSelectedTask,
    getTasks,
    createTask,
    deleteTask,
    updateTask,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
export default TasksProvider;
