import React, { useEffect, useState } from 'react'
import {Container, Header, Input, Button, Text, Link} from '../Login/styles'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth} from '../../firebase'

function Signup({handleModal, setCurrentUser}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")
  const [active, setActive] = useState(false)
  const [error, setError] = useState("")

  useEffect(()=>{
    if(email&&password&&userName){
    setActive(true)
  } else {
    setActive(false)
  }
  }, [email, password, active, userName])

  let user;  
  function handleSignIn(){
    if(!active)return
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      user = userCredential.user;
      
      setCurrentUser(user)
      console.log(user)
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)
      // ..
    });
    updateProfile(user, {
      displayName:userName
    })
  }

  return (
    <Container>
      {error&&<p style={{textAlign:'center',color:'red'}}>{error}</p>}
      <Header>Todo List</Header>
      <Input placeholder='User Name' type='text' onChange={(e)=>setUserName(e.target.value)}/>
      <Input placeholder='Email Address' type='email' onChange={(e)=>setEmail(e.target.value)}/>
      <Input placeholder='Password' type='password' onChange={(e)=>setPassword(e.target.value)}/>
      <Button onClick={handleSignIn} active={active}>Sign Up</Button>
      <Text>Already have an account! <Link onClick={handleModal}>Login now</Link></Text>
    </Container>
  )
}

export default Signup