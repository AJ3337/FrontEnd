import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material'
import { MdClose } from "react-icons/md";
import '../file.css'
export default function Signup() {
  const [open, setopen] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState("")
  const nav = useNavigate()

  const handleClose = () => {
    setopen(false)
    nav('/')
  };

  const handlesubmit = () => {
    axios
      .post("mid/send", {
        name,
        email,
        password,
        number
      })
      .then((res) => {
        nav('/login')
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
          signup
          <div className="logo">Please fill all Input box</div>
          <button onClick={() => { handleClose() }}><MdClose /></button>
        </DialogTitle>
        <DialogContent >
          <div className='grid grid-cols-2 gap-4'>
            <TextField variant='outlined' placeholder='name'  value={name} onChange={(e) => setName(e.target.value)} />
            <TextField variant='outlined' placeholder='email'  value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField variant='outlined' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <TextField variant='outlined' placeholder='contact_number' type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
          </div>
          <br />
          <Button variant='contained' onClick={() => { handlesubmit() }} fullWidth>signin</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
