import React from 'react'
import { Route, Routes } from 'react-router-dom'


import Home from './assets/pages/home/home'
import Navbar from './assets/components/navbar/navbar'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
