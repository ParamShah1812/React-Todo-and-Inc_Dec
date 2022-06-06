import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import { nanoid } from "nanoid";

import "./style.css";

import { Todoform } from "./Todoform";
import { TodoList } from "./TodoList";
import { TodoFilters } from "./TodoFilters";

// let text = "initisl text";
function App() {
  // let text = "initial text"
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  // const [editToggle, setEditToggle] = useState(1);
  // const [editedTaskId, setEditedTaskId] = useState(null);

  const [searchval, setSearchVal] = useState("");
  const [movies, setMovies] = useState(tasks);
  

  // const movies_list = [
  //   {
  //     "title": "movie1"
      
  //   },
    
  //   {
  //     "title": "movie2"
      
  //   },

  //   {
  //     "title": "movie3"
      
  //   },

  //   {
  //     "title": "movie4"
      
  //   },
    
  //   {
  //     "title": "movie5"
      
  //   }
  // ]

  

  const taskValueChange = (val) => {
    setText(val);

    // text = "Changed text";

    // setText("changed text")

    // console.log(text);
  };

  const searchValueChange = (searchval) => {
    setSearchVal(searchval)
  };

  // useEffect(() => {
  //     let temptasks = localStorage.getitem('tasks');
  //     console.log(temptasks);
  //     if(!temptasks){
  //         setTasks([])
  //     }else{
  //         setTasks(JSON.parse(temptasks));
  //     }

  // }, []);

  // useEffect(() => {
  //     let temptasks = localStorage.getitem('tasks');
  //     console.log(temptasks);
  //     setTasks(JSON.parse(temptasks));
  // });

  // useEffect(() => {
  //     let temptasks = localStorage.getitem('tasks');
  //     console.log(temptasks);
  //     setTasks(JSON.parse(temptasks));
  // }, tasks);

  //Adding a task with id, name and status
  // const addTask = () => {
  //   if (!text) {
  //     alert("Please insert a Task");
  //   } else if (text && !editToggle) {
  //     setTasks((task) => {
  //       if (task.id === editedTaskId) {
  //         return { ...task, name: text };
  //       }
  //       return task;
  //     });
  //   } else {
  //     const task_array = [
  //       ...tasks,
  //       { id: new Date().toString(), name: text, status: 0 },
  //     ]; //add all the tasks and gives a id and name to every task
  //     setTasks(task_array);
  //     setText("");

  //     localStorage.setItem("tasks", JSON.stringify(task_array));
  //   }
  // };

  const addTask = () => {
    const task_array = [
      ...tasks,
      { id: new Date().getTime().toString(), name: text, status: 0 },
    ]; //add all the tasks and gives a id and name to every task
    setTasks(task_array);
    setMovies(task_array);
    setText("");

    localStorage.setItem("tasks", JSON.stringify(task_array));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Deleting a task by id
  const deleteTask = (id) => {
    const tasks_array = tasks.filter((task) => task.id !== id);

    setTasks(tasks_array);

    // const deleteTask = (id) => {
    // const tasks_array = tasks.filter(function(task)){
    // if(task.id !== id){
    // return true;
    // }

    // return false;

    // }
    // }

    localStorage.setItem('tasks', JSON.stringify(tasks_array));
  };

  // const [state, setState] = useState(false)
  // const completedTask = () => {
  // setState({tasks: [...state.tasks.filter(task => {
  // return task.completed===true;
  // })]})
  // }

  // const completedTask = (id) => {
  // const setTasks = [...tasks];
  // tasks[id].isCompleted = true;
  // setTasks[tasks];
  // }

  // const [status, setStatus] = useState([]);

  // const completeTask = (id) => {
  // const tasks_array = tasks.filter(task => task.id !== id);
  // setStatus(tasks_array)
  // console.log(status)
  // }

  // const[status, setStatus] = useState(0)

  // const [status, setStatus] = useState(0)

  const onChecked = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          if (task.status === 0) {
            task.status = 1;
          } else {
            task.status = 0;
          }
        }
        return task;
      })
    );

    // setTasks(task => tasks.status != status);
    // if (status == 0) {
    // // status = 1;
    // setStatus(1);
    // }

    // if (status == 1) {
    // setStatus(0);
    // }

    // setTimeout(function(){
    // console.log(tasks);
    // }, 2000);
  };

  const showAll = () => {
    setFilter("All");
  };

  const showPending = () => {
    setFilter("Pending");
  };

  const showDone = () => {
    setFilter("Done");
  };

  //   const [num, setNum] = useState(0);

  //   const [limit, setLimit] = useState(100);

  //   const addNum = () => {
  //     if (limit !== 0) {
  //       setNum(num + 1);
  //       setLimit(limit - 10);
  //     }
  //   };

  //   const subNum = () => {
  //     if (num > 0) {
  //       setNum(num - 1);
  //       setLimit(limit + 10);
  //     }
  //   };

  // Editing a Task
  // const editTask = (id) => {
  //   let updateTask = tasks.find((task) => {
  //     return task.id === id;
  //   });
  //   console.log(updateTask);

  //   setEditToggle(0);

  //   setText(updateTask.name);

  //   setEditedTaskId(id);
  // }

  //clearing all tasks
  const removeTask = () => {
    const tasks_array = [];
    console.log("cleared all tasks");
    setTasks([]);
    localStorage.setItem('tasks', JSON.stringify(tasks_array));
  };


  const searchMovie = () => {
    // setSearchVal("");
    // alert(searchval + " " + "not found");
    
    // setTasks(tasks.filter((movie) => movie.name === searchval));
    // console.log(movies);

  }


  return (
    <>
      <Todoform
        text={text}
        addTask={addTask}
        taskValueChange={taskValueChange}
        handleSubmit={handleSubmit}
        // editToggle={editToggle}
        // editedTaskId = {editedTaskId}
        removeTask={removeTask}
        // editTask = {editTask}
        searchval={searchval}
        searchValueChange = {searchValueChange}
        searchMovie = {searchMovie}
      />
      <TodoList
        onChecked={onChecked}
        deleteTask={deleteTask}
        tasks={tasks}
        filter={filter}
        searchval = {searchval}
        // editTask={editTask}
      />

      <TodoFilters
        showAll={showAll}
        showDone={showDone}
        showPending={showPending}
      />

      {/* Code for Increament and decreament */}
      {/* <div>
                <button onClick={() => subNum()}>-</button>
                <input type="text" value={num} />
                <button onClick={() => addNum()}>+</button>
                <p>Rs 10 per item</p>
                <br />
                <input type="text" value={limit}></input>
            </div> */}

      
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
