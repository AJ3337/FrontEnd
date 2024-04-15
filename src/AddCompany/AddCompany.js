import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Link, TextField } from '@mui/material'
import { MdClose } from "react-icons/md";
import { useNavigate } from 'react-router';
import axios from "axios";

export default function AddCompany() {
  const [open, setopen] = useState(true)
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [founded, setFounded] = useState("")
  const [city, setCity] = useState("")
  const nav = useNavigate()


  const handleClose = () => {
    setopen(false)
    nav('/')
  };

  const handlesubmit = () => {
    axios
      .post("middle/data", {
        name,
        location,
        founded,
        city
      })
      .then((res) => {
        console.log(res.data)
        nav('/')
      })
      .catch((err) => {
        console.log(err)
      })

  }
  return (
    <Dialog
      open={open}>
      <DialogTitle className='flex justify-between'>
        Add Company
        <button onClick={() => { handleClose() }}><MdClose /></button>
      </DialogTitle>
      <DialogContent >
        <div className='grid grid-cols-2 gap-4'>
          <TextField variant='outlined' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
          <TextField variant='outlined' placeholder='location' value={location} onChange={(e) => setLocation(e.target.value)} />
          <TextField variant='outlined' placeholder='founded' value={founded} onChange={(e) => setFounded(e.target.value)} />
          <TextField variant='outlined' placeholder='city' value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <br />
        <Button variant='contained' onClick={() => { handlesubmit() }} fullWidth>ADD</Button>
      </DialogContent>
    </Dialog>
  )
}
