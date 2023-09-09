import React from "react";

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
}

type PropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: Function;

}

export function Todolist(props: PropsType): JSX.Element {
  return (
    <div>
      <h3>
        {props.title}
      </h3>
      <div>
        <input />
        <button>++</button>
      </div>
      <ul>
        {props.tasks.map((task) => {
          return (
            <li>
              <input type="checkbox" checked={task.isDone} />
              <span>{task.title}</span>
              <button onClick={() => props.removeTask(task.id)}>x</button>
            </li>
          )
        })}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Complited</button>
      </div>

    </div>
  );
}

