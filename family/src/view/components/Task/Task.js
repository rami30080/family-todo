import React, { useState } from 'react'
import './Task.css'
import { useHistory } from "react-router-dom";

const Task = (props)=>{
    const {item} = props
    // const [item,setItem]=useState([])
    let history = useHistory();
   let user = item.lastname
   let userItem = item.firstName
  console.log(user[0])
  function taskDetails(){
      user.map((task,index)=>{
          return (console.log(task.taskContent))
      })
      localStorage.setItem("TaskItem", user);
      history.push('/taskdetails')

  }
    return(
        <div>
           {item._id}
            {
            
            user.map((task,index)=>
            
             <h1 key={index}>
                 <button onClick={taskDetails}>{task.taskTitle} 
                 </button>
             </h1>

             )
            }

        </div>
    )
}

export default Task;