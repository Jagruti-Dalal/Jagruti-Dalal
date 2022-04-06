// require('dotenv').config();
const express = require('express');

const app=express();
app.use(express.json());
// const User = require("./models/user");
const mongoose= require('mongoose');
const port= process.env.PORT || 9090



//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json())


app.set('view engine', 'ejs')
app.use("", require("./routes/routes"))

// Connect with Database
mongoose.connect("mongodb+srv://Jagruti:1234@cluster0.kgh7g.mongodb.net/assign?retryWrites=true&w=majority").then(data=>{console.log('connection Success');
}).catch(err =>{
    console.log(err);
})//  fdJpAIm25UAJVpt1
// app.post("/api/save",(req,res)=>{
//    const user =new User({
//        name:req.body.name
//    })
//     user.save().then(data=>{
//         res.json({message:"success",data:data})
//     })
// })
// app.get("/api/get",(req,res)=>{
//     User.find().then(data=>{
//         res.json({message:"Success",data:data})
//     }).catch(err=>{
//         console.log(err)
//     })
// })

app.listen(port,()=>{
    console.log('server Running At Port' + port)
})