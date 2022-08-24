import { useState, useContext } from 'react';
import { TasksContext } from './context/TasksContext';
import { Form, Input } from '../styled/TasksForm';
import Button from '../styled/Button';

const TasksForm = () => {
  const [text, setText] = useState('');
  const { createTask } = useContext(TasksContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text || text === '') return alert('Please enter a task');
    const newTask = {
      title: text,
      finished: false,
      id: Math.random(),
    };
    createTask(newTask);
    setText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Start Doing Your Tasks.</label>
      <Input
        value={text}
        type="text"
        placeholder="Today I will ..."
        onChange={(e) => setText(e.target.value)}
      />
      <Button>Add</Button>
    </Form>
  );
};

export default TasksForm;
