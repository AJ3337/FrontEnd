import { Button, Card, CardContent, MenuItem, Paper, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FaRegStar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router';
import axios from 'axios';
import { FaMapMarkerAlt } from "react-icons/fa";
export default function Header() {
  const [cour, setCour] = useState(1)
  const [fetchdata, setfetchData] = useState([])
  const [first, setfirst] = useState([])
  const [second, setsecond] = useState('')
  const nav = useNavigate()
  useEffect(() => {
    ShowData()
  }, [])


  const handlesign = () => {
    nav('/signup')
  }
  const handlelogin = () => {
    nav('/login')
  }
  const handleClose = () => {
    nav('/addcompany')
  }
  const updatevalue = (e) => {
    setCour(e.target.value)
  }

  const ShowData = () => {
    axios
      .get('middle/fetch')
      .then((res) => {
        setfetchData(res.data.data)
        setfirst(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handlefilter = (e) => {
    if (e.target.value == '') {
      setfetchData(first)
    } else {
      const filterresult = first.filter(item => item.name.toLowerCase().includes(e.target.value) || item.location.toLowerCase().includes(e.target.value) || item.founded.toLowerCase().includes(e.target.value))
      setfetchData(filterresult)
    }
    setsecond(e.target.value)
  }

  const ascendingEvent = () => {
    let data = [...fetchdata]
    if (data.length > 0) {
      let result = data.sort((a, b) => a.name.localeCompare(b.name))
      setfetchData(result)
    }
  }
  const descendingEvent = () => {
    let data = [...fetchdata]
    if (data.length > 0) {
      let result = data.sort((a, b) => b.name.localeCompare(a.name))
      setfetchData(result)
    }
  }

  return (
    <div>
      {/* header */}
      <Paper>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex px-20 py-5'><FaRegStar /> Review<i>s</i><b>RATE</b></div>
          <div className='py-2'><TextField variant='outlined' value={second} onInput={(e) => handlefilter(e)} label={<CiSearch />} placeholder='search' fullWidth /></div>
          <div className='px-20 py-3 gap-10'>
            <Button variant='inline' onClick={() => { handlesign() }}>signUp</Button>
            <Button variant='inline' onClick={() => { handlelogin() }}>Login</Button>
          </div>
        </div>
      </Paper>
      <br />
      {/* component */}
      <div className='grid grid-cols-4 gap-4 mx-20'>
        <div><TextField variant='outlined' label={<FaMapMarkerAlt />} sx={{ width: 270, height: 50 }} /></div>
        <div className='py-2'><Button color='secondary' variant='contained'>Find Company</Button></div>
        <div className='py-2'><Button color='secondary' variant='contained' onClick={() => { handleClose() }}> +Add Company </Button></div>
        <div className='py-2'>
          <button variant='contained'>
            <Select value={cour}
              displayEmpty
              sx={{ height: 35 }}
              onChange={updatevalue}
            >
              <MenuItem value={1} >Name</MenuItem>
              <MenuItem value={2} onClick={ascendingEvent}>Ascending</MenuItem>
              <MenuItem value={3} onClick={descendingEvent}>descending</MenuItem>
              <MenuItem value={4}>Loaction</MenuItem>
            </Select>
          </button>
        </div>
      </div>
      {/* output */}
      <Paper>
        {fetchdata.map((res) => {
          return (
            <>
              <p>{res.id}</p>
              <Card className='mx-20 my-5 px-5 py-15'>
                <CardContent>
                  <p><b> CoName</b>  -      <i>{res.name}</i></p>
                  <p><b> Loaction</b>  -    <i>{res.location}</i></p>
                  <p><b>founder</b>  -      <i>{res.founded}</i></p>
                  <p><b> Establish</b>  -   <i>{res.city}</i></p>
                </CardContent>
              </Card>
            </>
          )
        })}
      </Paper>
    </div>
  )
}
