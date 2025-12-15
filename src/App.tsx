import React from 'react'
import { Route, Routes } from 'react-router-dom'


import Home from './assets/pages/home/home'
import Navbar from './assets/components/navbar/navbar'
import Footer from './assets/components/footer/footer'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
