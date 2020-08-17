const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'));


const url = "mongodb+srv://nimer:N1N1N1N1@cluster0.tejcy.mongodb.net/toDo";


const Mongoose = require('mongoose');
Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = Mongoose.model("User", {
    userEmail: String,
    firstName: String,
    lastName: String,
    imgUrl: String,
    password: String
})
const Task = Mongoose.model("Task", {
    user: {
        userEmail: String,
        firstName: String,
        lastName: String,
        imgUrl: String,
        password: String
    },
    taskTitle: String,
    taskContent: String,
    done: Boolean
})

app.post('/register', (req, res)=>{
    console.log("hbjk")
   
    const {name , family , img , pass} = req.body;
    console.log(name)
    res.send('aaaa')
    
  })

const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log('server listen on port ',port)})