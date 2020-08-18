import React from "react";
import "./Register.css";

const Register = () => {
  function registerHandler(e) {
    e.preventDefault();
    const { userEmail, Name, Family, Img, Password } = e.target.elements;
    const name = Name.value;
    const family = Family.value;
    const img = Img.value;
    const pass = Password.value;
    const useremail = userEmail.value;
    fetch("/register", {
      method: "POST",
      body: JSON.stringify({ useremail, name, family, img, pass }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const { register } = data;
        console.log(register);
      });
  }

  return (
    <div>
      <div className="body">
        <form className="container" onSubmit={registerHandler}>
          <h1 className="register">Register Now </h1>

          <input
            type="text"
            className="un"
            placeholder="First Name"
            name="Name"
          ></input>

          <input
            type="text"
            className="un"
            placeholder="Last Name"
            name="Family"
          ></input>

          <input
            type="text"
            className="un"
            placeholder="Email"
            name="userEmail"
          ></input>
          <input
            className="pass"
            type="password"
            placeholder="Password"
            name="Password"
          ></input>
          <input
            className="un"
            type="text"
            placeholder="Image"
            name="Img"
          ></input>
          <button className="submit" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
