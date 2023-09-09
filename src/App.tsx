import React, { useState } from 'react';
import { Todolist } from './Todolist';
import { TaskType } from './Todolist';
import './App.css';

function App() {

  let initTasks: TaskType[] = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ];

  let [tasks, setTasks] = useState(initTasks);

  function removeTask(id: number) {
    let filteredTasks = tasks.filter((task) => {
      if (task.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    setTasks(filteredTasks);
  }
  return (
    <div className="App">
      <Todolist
        title='what to learn'
        tasks={tasks}
        removeTask={removeTask} />
    </div>
  );
}

export default App;
