import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
      <div className='flex p-3 text-xl bg-red-400 justify-between items-center '>
        <p>Courses is Live</p>
        <p>Courses is Live</p>
        <p>Courses is Live</p>
        <p>Courses is Live</p>
        <p>Courses is Live</p>
        <p>Courses is Live</p>
        <p>Courses is Live</p>
        <p>Courses is Live</p>
        <p>Courses is Live</p>
        <p>Courses is Live</p>
      </div>
      <Outlet />
    </div>
  )
}

export default Courses
