import { useContext, useEffect } from 'react';
import { TasksContext } from './context/TasksContext';
import TodoItem from './TodoItem';
import Ul from '../styled/TodoItems';

const TodoItems = () => {
  const { getTasks, tasks } = useContext(TasksContext);

  useEffect(() => {
    getTasks();
  }, []);

  if (!tasks) return <h1>Loading...</h1>;

  return (
    <>
      <Ul>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
      </Ul>
    </>
  );
};

export default TodoItems;
