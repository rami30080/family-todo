import React from 'react'
import './Register.css'

const Register = ()=>{

    function registerHandler(e){
        e.preventDefault();
        const {Name,Family,Img,Password} = e.target.elements
        const name = Name.value
        const family = Family.value
        const img = Img.value
        const pass = Password.value
        fetch('/register', {
            method: 'POST',
            body: JSON.stringify({ name, family , img , pass }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(data => {
                console.log('Aaa')

            })
        
    }

    return(
        <div>
            <form onSubmit={registerHandler}>
            <input type="text" placeholder="name" name="Name" ></input>
            <input type="text" placeholder="family" name="Family" ></input>
            <input type="text" placeholder="image" name="Img" ></input>
            <input type="password" placeholder="password" name="Password" ></input>
            <button type='submit'>Login</button>
            </form>
        </div>
    )

}



export default Register

