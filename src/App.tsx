import React, { useState } from 'react';
import { TaskType, Todolist } from './Todolist';
import './App.css';
import { v1 } from 'uuid';


export type FiltersValueTypes = "active" | "completed" | "all";
function App() {

  let [tasks, setTasks] = useState<TaskType[]>([
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: false },
    { id: v1(), title: "Redux", isDone: false },
    { id: v1(), title: "Python", isDone: false },
  ]);

  function removeTask(id: string) {
    let filteredTasks = tasks.filter((task) => {
      if (task.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    setTasks(filteredTasks);
  }

  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  };

  function changeStatus(taskId: string, isDone: boolean) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      task.isDone = isDone;
    }
    setTasks([...tasks]);
  };

  function changeFilter(value: FiltersValueTypes) {
    setFilter(value);
  }
  let [filter, setFilter] = useState<FiltersValueTypes>("all");
  let tasksForTodolist = tasks;
  if (filter === "completed") {
    tasksForTodolist = tasks.filter((task) => task.isDone === true);
  }
  if (filter === "active") {
    tasksForTodolist = tasks.filter((task) => task.isDone === false);
  }
  return (
    <div className="App">
      <Todolist
        title='what to learn'
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeTaskStatus={changeStatus}
        filter={filter}
      />
    </div>
  );
}

export default App;
