import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Mobile from './pages/Mobile'
import Laptop from './pages/Laptop'
import Randomabout from './pages/Randomabout'
import Courses from './pages/Courses'
import Anycourses from './pages/Anycourses'
import Coursedetail from './pages/Coursedetail'
import Notfound from './pages/Notfound'

const App = () => {
  return (
    <div className='h-screen bg-black text-2xl text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/mobile' element={<Mobile />} />
        <Route path='/product/laptop' element={<Laptop />} />
        <Route path='/about/:id' element={<Randomabout />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:korseId' element={<Anycourses />} />
        <Route path='/courses/:korseId/detail' element={<Coursedetail />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App
