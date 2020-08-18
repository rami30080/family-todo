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

const User = Mongoose.model("users", {
    userEmail: String,
    firstName: String,
    lastName: String,
    imgUrl: String,
    password: String
})
const Task = Mongoose.model("tasks", {
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
    const {useremail ,name , family , img , pass} = req.body;
    User.find({firstName:name,lastName:family}).then(doc=>{
        if(doc.length>0){
            console.log("in")
        }else{
            console.log("else")
            User.create(
                {
                    userEmail:useremail,
                    firstName:name,
                    lastName:family,
                    imgUrl:img,
                    password:pass
                }
            ).then(doc=>{
                   console.log(doc)
                   res.send({register:true});
            })
        }
        
    })

    
  })

  
app.post('/login', (req, res)=>{
    const {name , family , pass} = req.body;
    User.find({firstName:name,lastName:family,password:pass}).then(doc=>{
        if(doc.length>0){
            console.log("in")
            res.send({loggedin:true})
        }else{
            console.log("else")
            res.send({loggedin:false})
        }
        
    })

    
  })


  app.post('/renderusers', async (req, res)=>{
    const {name , family} = req.body;
    let docs = await Task.aggregate([
      { $match: { 'user.lastName':family } },
      {
          $group: {
              _id: '$user.firstName',
              lastname: { $push: "$$ROOT" }
          }
      },

  ])

  console.log(docs)
  res.send(docs)



    
  })

const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log('server listen on port ',port)})