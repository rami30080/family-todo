import React, { useState } from 'react'
import './Task.css'

const Task = (props)=>{
    const {item} = props
    // const [item,setItem]=useState([])
    
   let user = item.lastname
   let userItem = item.firstName
  console.log(user[0])
    return(
        <div>
           {item._id}
            {
            
            user.map((task,index)=>
            
             <h1 key={index}>{task.taskContent}</h1>
          
            
             )
            }

        </div>
    )
}

export default Task;