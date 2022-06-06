import { useState } from "react";

export const TodoList = ({
  tasks,
  deleteTask,
  onChecked,
  filter,
  searchval
  // editTask,
}) => {
  // const [arr, setArr] = useState([])
  // const setArrfun = (task)=> {
  //   // setArr([...arr, task])
  //   console.log("okkk");
  // }
  return (
    <div className="todo-list">
      {/* List of todos */}

      {tasks.map((task, id) => {
        const task_init = (
          <div className="list" key={task.id}>
            <li key={task.id}>
              {" "}
              <input
                type="checkbox"
                checked={task.status === 1 ? "checked" : ""}
                onChange={() => onChecked(task.id)}
              />
              {task.name} - {task.status} -
              {/* <a href="#" onClick={() => editTask(task.id)}>
      Edit
    </a> */}
              -
              <a href="#" onClick={() => deleteTask(task.id)}>
                Delete
              </a>
            </li>
          </div>
        );
        if(searchval === ''){
          if (filter === "All") {
            return task_init;
          } else if (filter === "Pending" && task.status === 0) {
            return task_init;
          } else if (filter === "Done" && task.status === 1) {
            return task_init;
          } 
        }
        else if (task.name === searchval) {
          // setArrfun(task)
          return task_init;
        } 
        
        
      })}


    

      <br />
    </div>
  );
};
