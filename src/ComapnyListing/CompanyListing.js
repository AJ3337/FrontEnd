import { Button, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { FaMapMarkerAlt } from "react-icons/fa";
export default function CompanyListing() {
    const nav = useNavigate()
    const[cour,setCour] = useState(1)
    const handleClose = () => {
        nav('/addcompany')
    }
    const updatevalue =(e)=>{
       setCour(e.target.value)
    }
    return (
        <div className='grid grid-cols-4 gap-4 mx-20'>
        <div><TextField variant='outlined' label={<FaMapMarkerAlt/>} sx={{ width: 270, height: 50 }}/></div>
         <div className='py-2'><Button color='secondary' variant='contained'>Find Company</Button></div>
        <div className='py-2'><Button color='secondary' variant='contained' onClick={() => { handleClose() }}> +Add Company </Button></div>
         <div className='py-2'>
             <Button variant='contained' color='secondary' sx={{width:120 , height:35}}>
                 <Select value={cour}
                   displayEmpty
                   sx={{height:35}}
                   onChange={updatevalue}
                 >
                    <MenuItem value={1}>Name</MenuItem>
                    <MenuItem value={2}>Average</MenuItem>
                    <MenuItem value={3}>Rating</MenuItem>
                    <MenuItem value={4}>Loaction</MenuItem>
                 </Select>
                     
          </Button>
         </div>
         </div>
    )
}
