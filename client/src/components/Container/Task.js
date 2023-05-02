import React, { useState } from 'react'
import {
  TodoContainer,
  TodoControls,
  TodoDescription,
  TodoTitle,
  ButtonContainer,
  TodoWrapper,
  AddTodoTitle,
  AddTodoDescription
} from "../Todo/styles";
import './index.css'

import { GiHamburgerMenu} from "react-icons/gi";
import { MdOutlineExpandLess } from "react-icons/md";
import CheckboxDemo from '../../containers/CheckBox';

function Task({title, description, id, status, currentUser, handleDelete, handleEdit, handleStatus}) {
  const [options, setOptions] = useState(false)
  const [edit, setEdit] = useState(false)
  const [editTitle, setEditTitle] = useState(title)
  const [editDescription, setEditDescription] = useState(description)

  function toggleShow(){
    setOptions(prev=>!prev)
  }

  const style = status?({
      cursor:'not-allowed'
    }):({
      cursor:'pointer'
    })
  
  function triggerStatus(){
    handleStatus(id, currentUser.email, status)
  }

  return (
    <TodoWrapper>
      <CheckboxDemo triggerStatus={triggerStatus} status={status}/>
      <TodoContainer status={status}>
        {!edit?<TodoTitle>{title}</TodoTitle>:<AddTodoTitle onChange={(e)=>setEditTitle(e.target.value)} value={editTitle} />}
        {options&&(
          <>
            {!edit?<TodoDescription>{description}</TodoDescription>:<AddTodoDescription onChange={(e)=>setEditDescription(e.target.value)} >{editDescription}</AddTodoDescription>}
            <ButtonContainer>
            {edit?<TodoControls onClick={()=>handleEdit(id, editTitle, editDescription)}>Update</TodoControls>:
              <TodoControls style={style} onClick={()=>!status&&setEdit(true)}>Edit</TodoControls>}
              <TodoControls onClick={()=>handleDelete(id)}>Delete</TodoControls>
              {edit&&<TodoControls onClick={()=>setEdit(false)}>Cancel</TodoControls>}
            </ButtonContainer>
          </>
        )}
      </TodoContainer>
      {!options?
        <GiHamburgerMenu onClick={toggleShow} className='moreIcon' size={27} color='white' />:
        <MdOutlineExpandLess onClick={toggleShow} className='moreIcon' size={27} color='white' />}
    </TodoWrapper>
  )
}

export default Task