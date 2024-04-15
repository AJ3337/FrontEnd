import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material'
import { MdClose } from "react-icons/md";

export default function Login() {
  const [open, setopen] = useState(true)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [password, setPassword] = useState("")
  const nav = useNavigate()

  const handleClose = () => {
    setopen(false)
    nav('/')
  };

  const handlesubmit = () => {
    axios
      .post("mid/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data === "Success") {
          nav("/")
        }
        else {
          setError("Not a Valid user")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  return (
    <div>
      <Dialog
        open={open}>
        <DialogTitle className='flex justify-between'>
          Login
          <div>{error}</div>
          <button onClick={() => { handleClose() }}><MdClose /></button>
        </DialogTitle>
        <DialogContent >
          <div className='grid grid-cols-2 gap-4'>
            <TextField variant='outlined' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField variant='outlined' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <br />
          <Button variant='contained' onClick={() => { handlesubmit() }} fullWidth>LogIn</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
