import React, { useState } from 'react'
import './TaskDetails.css'
import Task from '../Task/Task'
import { useHistory } from "react-router-dom";
//taskdetails
const TaskDetails = (props)=>{
    const {user} = props
    return (
        <div>
            {
                console.log(user)
            }
        </div>
    )
}

export default TaskDetails