import { useContext, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import ModalButton from '../styled/ModalButton';
import { Input } from '../styled/TasksForm';
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  Form,
  Select,
} from '../styled/Modal';
import { TasksContext } from './context/TasksContext';

const Modal = ({ isOpen, setIsOpen }) => {
  const { selectedTask, setSelectedTask, updateTask } =
    useContext(TasksContext);

  const [title, setTitle] = useState(selectedTask.title);
  const [isFinished, setIsFinished] = useState(selectedTask.finished);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      title,
      finished: isFinished,
    };

    setSelectedTask(updatedTask);

    updateTask(selectedTask.id, updatedTask);

    setIsOpen(false);
  };

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={() => setIsOpen(false)}>
          <FaTimes />
        </CloseButton>

        <Form onSubmit={handleSubmit}>
          <label>Edit Task</label>
          <Input
            value={title}
            type="text"
            placeholder="Task"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Select
            required
            value={isFinished}
            onChange={(e) =>
              setIsFinished(e.target.value === 'true' ? true : false)
            }
          >
            <option disabled>Please Select Task Status</option>
            <option value={false}>Active</option>
            <option value={true}>Done</option>
          </Select>

          <ModalButton isModalPrimary={true}>Save</ModalButton>
        </Form>

        <ModalButton isModalPrimary={false} onClick={() => setIsOpen(false)}>
          Cancel
        </ModalButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
