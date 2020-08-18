import React from 'react'
import './Main.css'

const Main = ()=>{

        let family = localStorage.getItem('familyID');
        let name = localStorage.getItem('NameID');
        fetch('/renderusers', {
            method: 'POST',
            body: JSON.stringify({ name, family}),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(data => {
                const docs = data
                console.log(docs[0].lastname)

            })
    return(

        <div>
        <h1>Main</h1>
        </div>
        
    )
}

export default Main