import React from 'react'
import './Login.css'

const Login = ()=>{

    return(
        <div>
            <input type="text" placeholder="name" name="Name" ></input>
            <input type="text" placeholder="family" name="family" ></input>
            <input type="password" placeholder="password" name="password" ></input>
            <button>Login</button>
        </div>
    )
}

export default Login