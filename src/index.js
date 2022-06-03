import React, { useState } from "react";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";


// let text = "initisl text";
function App() {
    // let text = "initial text"
    const [text, setText] = useState("initial text");
    const [tasks, setTasks] = useState([]);
    const taskValueChange = (val) => {

        setText(val);
        
        // text = "Changed text";

        // setText("changed text")

        // console.log(text);

    };


    const addTask = () => {
        setTasks([...tasks, { id: nanoid(), name: text}]); //add all the tasks and gives a id and name to every task
        setText("");
    }

    const[num, setNum] = useState(0);

    const[limit, setLimit] = useState(100);

    const addNum = () => {
        
        if(limit !== 0){
            setNum(num + 1);
            setLimit(limit - (10));
        }
        
    }

    const subNum = () => {

        if (num > 0){
            setNum(num - 1);
            setLimit(limit + (10));
        }

        
        
        
    }

        // Deleting a task by id
    const deleteTask = (id) => {



        // const deleteTask = (id) => {
        //     const tasks_array = tasks.filter(function(task)){
        //         if(task.id !== id){
        //             return true;
        //         }
                
        //         return false;
                
                
        //     }
        // }


        const tasks_array = tasks.filter(task => task.id !== id);

        setTasks(tasks_array);
    }

   
    return (
        <>
            <div className="todo-form">
                <input type="text" value={text} onChange = {(e) => taskValueChange(e.target.value)}/>
                <button onClick={() => addTask()}>Add</button>
            </div>


         

            <br />

            <div className="todo-list">

                {/* List of todos */}

                {tasks.map(task =>{
                    return <p key={task.id}>{task.id} -- {task.name} <a href="#" onClick={() => deleteTask(task.id)}>Delete</a></p>;
                })}
                <br />


            </div>
            

            
                {/* Code for Increament and decreament */}
            <div>
                <button onClick={() => subNum()}>-</button>
                <input type="text" value={num}/>
                <button onClick={() => addNum()}>+</button> 
                <p>Rs 10 per item</p>
                <br/>
                <input type="text" value={limit}></input>
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));