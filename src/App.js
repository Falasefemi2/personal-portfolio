import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Works from './Components/Works'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/works' element={<Works />} />
      <Route path='/contacts' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App