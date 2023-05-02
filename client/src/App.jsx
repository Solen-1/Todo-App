import React, { useEffect, useState } from 'react'
import Wrapper from './components/Container'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Todo from './components/Todo'

function App() {

  const [user, setUser] = useState(null)
  const [hasAccount, setHasAccount] = useState(false)

  const handleModal = () => {
    setHasAccount(prev=>!prev)
  }

  useEffect(()=>{
    console.log(user)
  },[user])

  if(user){
    return (
      <Wrapper>
        <Navbar currentUser={user} setCurrentUser={setUser}/>
        <Todo currentUser={user}/>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Navbar currentUser={user} />
      {!hasAccount?<Login handleModal={handleModal} setCurrentUser={setUser}/>
      :<Signup handleModal={handleModal} setCurrentUser={setUser}/>}:
    </Wrapper>
  )
}

export default App