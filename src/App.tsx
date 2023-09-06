import React from 'react';
import { Todolist } from './Todolist';
import { TaskType } from './Todolist';
import './App.css';

function App() {

  let tasks1: TaskType[] = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ];

  let tasks2: TaskType[] = [
    { id: 1, title: "Terminator", isDone: true },
    { id: 2, title: "XXX", isDone: false },
    { id: 3, title: "Gentlemen of fortune", isDone: true },
  ];

  return (
    <div className="App">
      <Todolist title='what to learn' tasks={tasks1} />
      <Todolist title='movies' tasks={tasks2} />
    </div>
  );
}

export default App;
