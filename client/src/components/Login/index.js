import React, { useEffect, useState } from 'react'
import {Container, Header, Input, Button, Text, Link} from './styles'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'

function Login({handleModal, setCurrentUser}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [active, setActive] = useState(false)
  const [error, setError] = useState("")

  useEffect(()=>{
    if(email&&password){
    setActive(true)
  } else {
    setActive(false)
  }
  console.log(active)
  }, [email, password, active])

  function handleSignin(){
    if(!active)return
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setCurrentUser(user)
      console.log(user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
  }

  return (
    <Container>
      {error&&<p style={{textAlign:'center',color:'red'}}>{error}</p>}
      <Header>Todo List</Header>
      <Input autoComplete='off' placeholder='Email Address' type='email' onChange={(e)=>setEmail(e.target.value)}/>
      <Input autoComplete='off' placeholder='Password' type='password' onChange={(e)=>setPassword(e.target.value)}/>
      <Button onClick={handleSignin} active={active}>Log In</Button>
      <Text>New to Todo-list? <Link onClick={handleModal}>Signup now</Link></Text>
    </Container>
  )
}

export default Login