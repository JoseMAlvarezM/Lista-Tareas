import React from 'react';
import { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';

function TaskCard({ task }) {

  const { eliminarTarea } = useContext(TaskContext)

  
  return (
    <div>
      <h1>{task.title}</h1>
      <h2>{task.description}</h2>
      <button onClick={() => eliminarTarea(task.id)}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;

