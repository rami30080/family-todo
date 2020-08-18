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
            .then( async data => {
                const docs = data
                let u = docs[0].lastname[0].taskContent
                console.log(u)                    
                const users = docs[0].lastname
                
                users.map(function(item, index){
                    console.log('test');
                document.getElementById('rami').innerText = <li key={index}>test</li>
                  })

            })
    return(

        <div id='rami'>
        <h1>Main</h1>
        </div>
        
    )
}

export default Main