import React from "react";
import "./App.css";
import Login from "./view/login/Login";
import Register from "./view/register/Register";
import Main from "./view/main/Main";
import TaskDetails from "./view/components/taskDetails/TaskDetails"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/main">
            <Logged />
          </Route>
          <Route path="/register">
            <Reg />
          </Route>
          <Route path="/taskdetails">
            <Task />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="page">
      <Login />
      <Link to="/register">Register</Link>
    </div>
  );
}

function Reg() {
  return (
    <div className="page">
      <Register />
    </div>
  );
}

function Logged() {
  return (
    <div className="page">
      <Main />
    </div>
  );
}

 function Task() {
   return(
     <div className="page">
       <TaskDetails/>
     </div>
   )
 }
