import React,{useState, useEffect} from 'react'
import './Main.css'
import TaskDetails from '../components/taskDetails/TaskDetails'
import Task from '../components/Task/Task'

const Main = ()=>{
   
        const [item, setItem] = useState([]);
        const [x,setX]=useState("")
        let family = localStorage.getItem('familyID');
        let name = localStorage.getItem('NameID');
        let arr =[];

        function handleSubmit(e){
            e.preventDefault();
            setItem([...item,{firstName:e.firstName}]);
           console.log(" HIII")
          }

       useEffect(()=>{
        fetch('/renderusers', {
            method: 'POST',
            body: JSON.stringify({ name, family}),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then( data => {
                setX(data);
            //     const docs = data
            //     let u = docs[0].lastname[0].taskContent
            //     console.log(u)                    
            //     const users = docs[0].lastname
                
            //     users.map(function(item, index){
            //         console.log('test');
            //    return(<Task key={index} item={item}/>)
                //   })

            })
       },[])
    return(

        <p id='rami' >
            {
            x && x.map((item,index)=>{
                return(<Task key={index} item={item}/>)
            })}
        </p>
        
    )
}

export default Main;

