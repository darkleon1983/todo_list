import React, { ChangeEvent, ChangeEventHandler, KeyboardEvent, useState } from "react";
import { FiltersValueTypes } from "./App";
import { error } from "console";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
}

type PropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (id: string) => void;
  changeFilter: (value: FiltersValueTypes) => void;
  addTask: (title: string) => void;
  changeTaskStatus: (taskId: string, isDone: boolean) => void;
  filter: FiltersValueTypes;
}

export function Todolist(props: PropsType): JSX.Element {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onNewTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setNewTaskTitle(event.currentTarget.value);
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (newTaskTitle.trim() === "") {
        setError("Title is required");
        return;
      }
      props.addTask(newTaskTitle.trim());
      setNewTaskTitle("");
    };
  };

  const addTask = () => {
    if (newTaskTitle.trim() === "") {
      setError("Title is required");
      return;
    }
    props.addTask(newTaskTitle.trim());
    setNewTaskTitle("");
  };

  const onAllClickHandler = () => { props.changeFilter("all") };
  const onActiveClickHandler = () => { props.changeFilter("active") };
  const onCompletedClickHandler = () => { props.changeFilter("completed") };

  return (
    <div>
      <h3>
        {props.title}
      </h3>
      <div>
        <input
          value={newTaskTitle}
          onChange={onNewTitleChangeHandler}
          onKeyDown={onKeyDownHandler}
          className={error ? "error" : ""}
        />
        <button onClick={addTask}>++</button>
        {error && <div className="error-message">Title is required!</div>}
      </div>
      <ul>
        {props.tasks.map((task) => {
          const onRemoveHandler = () => {
            props.removeTask(task.id)
          }
          const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(task.id, event.currentTarget.checked);
          }
          return (
            <li
              key={task.id}
              className={task.isDone ? "is-done" : ""}>
              <input
                type="checkbox"
                onChange={onChangeHandler}
                checked={task.isDone}
              />
              <span>{task.title}</span>
              <button onClick={onRemoveHandler}>x</button>
            </li>
          )
        })}
      </ul>
      <div>
        <button className={props.filter === "all" ? "active-filter" : ""} onClick={onAllClickHandler}>All</button>
        <button className={props.filter === "active" ? "active-filter" : ""} onClick={onActiveClickHandler}>Active</button>
        <button className={props.filter === "completed" ? "active-filter" : ""} onClick={onCompletedClickHandler}>Complited</button>
      </div>
    </div>
  );
};
