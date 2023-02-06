import TaskCard from './TaskCard';
import { TaskContext } from '../Context/TaskContext';
import { useContext } from 'react';

function TaskList() {
  const { tasks, eliminarTarea } = useContext(TaskContext);
  if (tasks.length === 0) {
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} eliminarTarea2={eliminarTarea} />
      ))}
    </div>
  );
}

export default TaskList;
