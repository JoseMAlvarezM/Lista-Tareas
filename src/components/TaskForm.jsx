import { useState, useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { createTask } = useContext(TaskContext)

  const handleSubmit =(e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Esribr tu tarea'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <input
        placeholder='Descripcion'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;


