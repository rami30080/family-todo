import React from 'react'
import './Login.css'

const Login = ()=>{
    function loginHandler(e){
        e.preventDefault();
        const {Name,Family,Password} = e.target.elements
        const name = Name.value
        const family = Family.value
        const pass = Password.value
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ name, family , pass }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(data => {
                const {loggedin} = data
                console.log(loggedin)

            })
        
    }

    return(
        <div><p>
            <form onSubmit={loginHandler}>
            <input type="text" placeholder="name" name="Name" ></input>
            <input type="text" placeholder="family" name="Family" ></input>
            <input type="password" placeholder="password" name="Password" ></input>
            <button>Login</button>
            </form>
            </p>

        </div>
    )
}

export default Login