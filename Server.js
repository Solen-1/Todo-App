const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require("morgan")
const mongoose = require('mongoose')
const cors = require("cors")
require('dotenv/config')
const api = process.env.API_URL

//middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))
//app.use(cors())
app.options('*', cors())

const taskSchema = mongoose.Schema({
  email: String,
  title: {
    type: String,
    required:true
  },
  description: String,
  status: {type:Boolean, default:false},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const Task = mongoose.model('Task', taskSchema)

const userSchema = mongoose.Schema({
  name:String,
  email:String
})

const User = mongoose.model('User', userSchema)

app.post('/task', (req, res)=>{
  const task = new Task({
    email:req.body.email,
    title:req.body.title,
    description:req.body.description
  })
  task.save().then((task)=>{
    res.status(201).json(task)
  }).catch(error=>{
    res.status(500).json({
      error:error,
      success:false
    })
  })
}) 

app.post('/user', (req, res)=>{
  const user = new User({
    name:req.body.name,
    email:req.body.email
  })

  user.save().then(user=>{
    res.status(201).json(user)
  }).catch (error=>{
    res.status(500).json({
      error:error,
      success:false
    })
  })
})

// app.get('/task',(req, res)=>{
//   Task.find()
//     .then(tasks=>{
//       res.status(201).json(tasks)
//     }).catch(error=>{
//     res.status(500).json({
//       error:error,
//       status:false
//     })
//   })
// })

app.get('/task', (req, res)=>{
  Task.find(
  //   {
  //   email:req.body.email
  // }
  ).then(tasks=>{
    res.status(201).json(tasks)
  }).catch(error=>{
    res.status(500).json({
      error:error,
      status:false
    })
  })
})

app.delete('/task/:taskId', (req, res)=>{
  let taskId = req.params.taskId
  Task.findOneAndRemove({_id:taskId}).then(deleted=>{
    res.status(201).json({
      deletedObject:deleted,
      success:true
    })
  }).catch(error=>
      res.status(500).json({
      error:error,
      status:false
  }))
})

app.put('/task/:taskId', (req, res)=>{
  let taskId = req.params.taskId;
  let email = req.body.email;
  let title = req.body.title;
  let description = req.body.description;
  let status = req.body.status;
  let updatedAt = Date.now();
  Task.findOneAndUpdate(
    {_id:taskId},
    {
    email:email,
    title:title,
    description:description,
    updatedAt:updatedAt,
    status:status
    },{
      new:true
    }
  ).then(updated=>{
    res.status(201).json({
      updatedObject:updated,
      success:true
    })
  }).catch(error=>{
      res.status(500).json({
        error:error,
        status:false
      })
    })
})

app.get("/hello",(req, res)=>{
  res.json({
    message:"Hello"
  })
})

async function connect(){
  try{
    await mongoose.connect("mongodb+srv://melkatole1:G4Uo6AYTkLpcmRPm@cluster0.1lb6omo.mongodb.net/todo-app")
    console.log("we have a connection")
  } catch (error) {
    console.log(error)
  }
}

connect()

app.listen(4000, ()=>{
  console.log(api, "Server is running on http://localhost:4000")
})