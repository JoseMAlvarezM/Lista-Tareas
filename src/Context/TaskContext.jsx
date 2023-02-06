import { createContext, useState, useEffect } from 'react';
import { tarea } from '../data/Tarea';

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function eliminarTarea(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(tarea);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask: createTask,
        eliminarTarea: eliminarTarea
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
