import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import React from "react";
import "./Login.css";

const Login = () => {
  let history = useHistory();
  function loginHandler(e) {
    e.preventDefault();
    const { Name, Family, Password } = e.target.elements;
    const name = Name.value;
    const family = Family.value;
    const pass = Password.value;
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({ name, family, pass }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const { loggedin } = data;
        if (loggedin) {
          localStorage.setItem("familyID", family);
          localStorage.setItem("NameID", name);
          history.push("/main");
        } else {
          document.getElementById("badmsg").innerText = "User Not Exist's";
        }
      });
  }
  return (
    <div className="body">
      <p className="container">
        <h1 className="login">Log in</h1>
        <form onSubmit={loginHandler}>
          <input
            className="un"
            type="text"
            placeholder="First Name"
            name="Name"
          ></input>
          <input
            className="un"
            type="text"
            placeholder="Last Name"
            name="Family"
          ></input>
          <input
            className="un"
            type="password"
            placeholder="Password"
            name="Password"
          ></input>
          <button className="submit">Login</button>
          <p id="badmsg"></p>
          <button className="submit">Register</button>
        </form>
      </p>
    </div>
  );
};

export default Login;
