/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Container, Header } from "../Login/styles";
import {
  AddTodoContainer,
  TodosContainer,
  AddTodoDescription,
  AddTodoTitle,
  AddTodo,
  AddButton
} from "./styles";

import Task from "../Container/Task";
import {BsPlusSquare} from 'react-icons/bs'
import axios from "axios";
import {BarLoader} from 'react-spinners'
import SelectDemo from "../../containers/Select";

const Empty = ()=> (
  <div style={{alignSelf:"center",justifySelf:"center"}}>
    <Header>No Tasks Found!</Header>
  </div>
)

function Todo({currentUser}) {
  const [isLoading, setIsLoading] = useState(true);
  const [addTask, setAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [select, setSelect] = useState(null)

  function getTasks(){
    axios.get("http://localhost:4000/task")
      .then(res=> setTasks(res.data))
      .catch(error=>{
      console.log(error)
    }).finally(()=>{
      setIsLoading(false)
    })
  }

  useEffect(()=>{
    getTasks()
  },[])

  function handleDelete(id){
    axios.delete(`http://localhost:4000/task/${id}`)
      .then(res=>console.log(res))
      .catch(error=>console.log(error))
      .finally(()=>{
        setIsLoading(true)
        getTasks()
      })
  }

  function handleEdit(id, editTitle, editDescription){
    axios.put(`http://localhost:4000/task/${id}`,{
      email: currentUser.email,
      title:editTitle,
      description:editDescription
    })
    .then(res=>console.log(res))
    .catch(error=>console.log(error))
    .finally(()=>{
      setIsLoading(true)
      getTasks()
    })
  }
  
  let taskArr;
  if(tasks){
    if(select == null){
      taskArr = tasks.filter(task=>task.email===currentUser.email)
    } else {
      taskArr = tasks.filter(task=>task.email===currentUser.email && task.status === select)
    }
    taskArr = taskArr.map((task, index)=>(
      <Task key={index} title={task.title} description={task.description} id={task["_id"]} status={task.status} currentUser={currentUser} handleDelete={handleDelete} handleEdit={handleEdit} handleStatus={handleStatus}/>
    ))
    console.log(taskArr)
  }
 
  function handleAddTask() {
    if(!title)return

    axios.post("http://localhost:4000/task",{
      email:currentUser.email,
      title:title,
      description:description
    })
    .then(res=>console.log(res))
    .catch(error=>{
      console.log(error)
    })
    .finally(()=>{
      setAddTask(prev=>!prev)
      setIsLoading(true)
      getTasks()
    })
  }

  function handleStatus(id, email, status){
    axios.put(`http://localhost:4000/task/${id}`,{
      email: email,
      status:!status
    })
    .then(res=>console.log(res))
    .catch(error=>console.log(error))
    .finally(()=>{
      setIsLoading(true)
      getTasks()
    })
  }

  function toggleTask(){
    setAddTask(prev=>!prev)
  }

  console.log(title, description)

  return (
    <Container todo={true}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Header>Todo List</Header>
        <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
          <p style={{color:"white", fontWeight:"bold", fontFamily:'monospace'}}>Filter By:</p>
          <SelectDemo setSelect={setSelect} select={select}/>
        </div>
      </div>
      <TodosContainer>
        {!isLoading?
        <>
          {taskArr.length?taskArr:<Empty/>}
          {addTask&&
          <AddTodoContainer>
            <AddTodoTitle id="addtitle" placeholder="add the task" onChange={(e)=>setTitle(e.target.value)} />
            <AddTodoDescription
              id="taskdesc"
              placeholder="Add discription here"
              onChange={(e)=>setDescription(e.target.value)}
            />
            <div style={{display:'flex', gap:'1rem', justifyContent:'center'}}>
              <AddButton style={{cursor:!title?'not-allowed':'pointer'}} onClick={handleAddTask}><p style={{color:"whitesmoke", fontWeight:'bold'}}>Add Task</p><BsPlusSquare size={20} color="white"/></AddButton>
              <AddButton onClick={toggleTask}><p style={{color:"whitesmoke", fontWeight:'bold'}}>Cancel</p></AddButton>
            </div>
          </AddTodoContainer>}
          {!addTask&&<AddButton onClick={toggleTask}><p style={{color:"whitesmoke", fontWeight:'bold'}}>Add Task</p><BsPlusSquare size={20} color="white"/></AddButton>}
        </>
        :<div style={{alignSelf:"center",justifySelf:"center"}}>
          <BarLoader color="gray"/>
        </div>}
      </TodosContainer>
    </Container>
  );
}

export default Todo;
