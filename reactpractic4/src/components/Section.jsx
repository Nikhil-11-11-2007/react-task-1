import React, { useContext } from 'react'
import { DataUserContext } from '../context/UserContext'

const Section = () => {

    const data = useContext(DataUserContext)

  return (
    <div className='h-140 w-full bg-zinc-700'>
      <h2>Section</h2>
      <h4>{data.userData.name}</h4>
    </div>
  )
}

export default Section
