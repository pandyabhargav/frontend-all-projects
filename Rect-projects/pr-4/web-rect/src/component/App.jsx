import React from 'react'
import Header from './Header/Header'
import Footer from './Foter/Foter'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App