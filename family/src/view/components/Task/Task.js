import React, { useState } from "react";
import "./Task.css";
import { useHistory } from "react-router-dom";

const Task = (props) => {
  const { item } = props;
  console.log(item);
  // const [item,setItem]=useState([])
  let history = useHistory();
  let user = item.user;

  // console.log(user[0]);
  function taskDetails(task) {
    localStorage.setItem("taskContent", task.taskContent);
    history.push("/taskdetails");
  }
  return (
    <div>
      {item._id}
      {user.map((task, index) => (
        <h1 key={index}>
          <button onClick={() => taskDetails(task)}>{task.taskTitle}</button>
        </h1>
      ))}
    </div>
  );
};

export default Task;
