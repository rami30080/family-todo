const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
var nodemailer = require('nodemailer')
var validator = require("email-validator");

app.use(express.static('public'))

const url = "mongodb+srv://nimer:N1N1N1N1@cluster0.tejcy.mongodb.net/server";
//const url = "mongodb+srv://Marshood:raMHdQuDOBxwrcss@cluster0.ifcjp.mongodb.net/jiraphServer";

const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
    userInfo: {
        employeeName: String,
        employeeEmail: String,
        employeeRole: String,
        password: String
    }
})

const User = mongoose.model('usermodels', UserSchema);

app.get('/getUsersList',(req,res)=>{
    User.find({}).then(users=>{
        if(users.length>0){
            let table = [];
            for (let index = 0; index < users.length; index++) {
                table.push({email:users[index].userInfo.employeeEmail,name:users[index].userInfo.employeeName,role:users[index].userInfo.employeeRole})
            }
            res.send({success:true,error:null,info:{table}})
        }
    })
})

app.post('/forgotPassword',(req,res)=>{
    const { email } = req.body;
    if(validator.validate(email)){
        User.find({"userInfo.employeeEmail":email}).then(checkEmail=>{
        console.log(checkEmail)
       if(checkEmail.length>0){
           if(validator.validate(email)){
               const key = makeid(10)
               var transporter = nodemailer.createTransport({
                   service: 'gmail',
                   auth: {
                     user: 'servicetest468@gmail.com',
                     pass: 'mxzmxz123'
                   }
                 });
                 
                 var mailOptions = {
                   from: 'servicetest468@gmail.com',
                   to: 'ramiayoub12123@gmail.com',
                   subject: 'Reset Password',
                   text: 'Your Key Is: '+ key
                 };
                 
                 transporter.sendMail(mailOptions, function(err, info){
                   if (err) {
                     console.log(err);
                   } else {
                     console.log('Email sent: ' + info.response);
                   }
                 });
               res.send({success:true,error:null,info:{key:key}})
               
           }else{
               res.send({success:true,error:"Email is not valid",info:{key:key}})

           }
       }else{
           res.send({success:false,error:"Email not found",info:null})
       }
    })
   }else{
       res.send({success:false,error:"Email not valid",info:null})
   }
})

app.post('/getUserInfo',(req,res)=>{
    const { email } = req.body;
    if(validator.validate(email)){
       User.find({"userInfo.employeeEmail":email}).then(checkEmail=>{
          if(checkEmail.length>0){
                  console.log(checkEmail)
                  res.send({success:true,error:null,info:{email:checkEmail[0].userInfo.employeeEmail,name:checkEmail[0].userInfo.employeeName,role:checkEmail[0].userInfo.employeeRole,id:checkEmail[0]._id}})
                  
          }else{
              res.send({success:false,error:"Email not found",info:null})
          }
       })
      }else{
          res.send({success:false,error:"Email not valid",info:null})
      }
})

app.post('/createUser',(req,res)=>{
    const { email , password , name , role} = req.body;
    if(validator.validate(email)){
       User.find({"userInfo.employeeEmail":email}).then(checkEmail=>{
          if(checkEmail.length>0){
                res.send({success:false,error:"Email is already in use",info:null})          
          }else{
              User.insertMany({userInfo:{employeeName:name,employeeEmail:email,employeeRole:role,password:password}})
              res.send({success:true,error:null,info:null})
          }
       })
      }else{
          res.send({success:false,error:"Email not valid",info:null})
      }
})

app.put('/editUser',(req,res)=>{
    const { id , email , password , name , role} = req.body;
    if(validator.validate(email)){
       User.find({"userInfo.employeeEmail":email}).then(checkEmail=>{
           console.log(checkEmail)
          if(checkEmail.length>0){
              User.find({_id:id,"userInfo.employeeEmail":email}).then(checkUserEmail=>{
                  if(checkUserEmail.length>0){
                    User.update({_id:id},{$set:{userInfo:{employeeName:name,employeeEmail:email,employeeRole:role,password:password}}}).then(res.send({success:true,error:null,info:null}))
                  }else{
                    res.send({success:false,error:"Email is already in use",info:null})  
                  }
              })        
          }else{
              User.update({_id:id},{$set:{userInfo:{employeeName:name,employeeEmail:email,employeeRole:role,password:password}}}).then(res.send({success:true,error:null,info:null}))
              
          }
       })
      }else{
          res.send({success:false,error:"Email not valid",info:null})
      }
})

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


app.listen(4000, () => { console.log("App is Listening to 4000") })