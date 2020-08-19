import React, { useState } from "react";
import "./TaskDetails.css";
import Task from "../Task/Task";
import { useHistory } from "react-router-dom";
//taskdetails
const TaskDetails = (props) => {
  const { user } = props;
  return <div>{localStorage.getItem("taskContent")}</div>;
};

export default TaskDetails;
