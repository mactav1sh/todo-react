import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { TasksContext } from './context/TasksContext';
import Modal from './Modal';
import { Li, Div, EditButton, DeleteButton } from '../styled/TodoItem';

const TodoItem = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteTask, setSelectedTask, updateTask } = useContext(TasksContext);

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    return deleteTask(id);
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setIsOpen(true);
  };

  const handleTitleClick = () => {
    const clicked = !task.finished;
    updateTask(task.id, { finished: clicked });
  };
  return (
    <>
      <Div>
        <Li onClick={handleTitleClick} checked={task.finished}>
          {task.title}
        </Li>
        <DeleteButton onClick={() => handleDelete(task.id)}>
          <FaTimes />
        </DeleteButton>
        <EditButton onClick={() => handleEdit(task)}>
          <FaPencilAlt />
        </EditButton>
      </Div>

      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default TodoItem;
