import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Course from './components/Course'
import Companies from './components/Companies'
import Topcourse from './components/Topcourse'
import Footer from './components/Footer'

function App(){

  return (
    <div>
      <Navbar/>
      <Banner/>
      <Course/>
      <Companies/>
      <Topcourse/>
      <Footer/>
    </div>
  )
}

export default App
