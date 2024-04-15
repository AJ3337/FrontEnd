import React from 'react'
import { Route, Routes } from 'react-router'
import AddCompany from './AddCompany/AddCompany'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import Header from './Header/Header'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Header/>}/>
        <Route path="/addcompany" element={<AddCompany/>}/>
      </Routes>
    </div>
  )
}
