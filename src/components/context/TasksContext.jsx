import { createContext, useState } from 'react';

const tasksExamples = [
  {
    title: 'Go to the Gym',
    finished: true,
    id: 2,
  },
  {
    title: 'Watch a new movie',
    finished: true,
    id: 6,
  },
  {
    title: 'Read a book',
    finished: false,
    id: 7,
  },
];

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
    setTasks(tasksExamples);
  };

  // 2.Create Tasks
  const createTask = async (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  // 3.Delete Task
  const deleteTask = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // 4. Update Task
  const updateTask = async (id, newTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...newTask } : task
    );
    setTasks(updatedTasks);
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
