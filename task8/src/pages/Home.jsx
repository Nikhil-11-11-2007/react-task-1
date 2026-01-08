import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-black h-screen flex flex-col gap-9 items-center justify-center text-white'>
      <h2 className='uppercase font-semibold text-8xl'>This is home page</h2>
      <button onClick={() => {
        navigate("/products")
      }}
      className='bg-[#6f036f] active:scale-98 cursor-pointer px-9 py-4 text-2xl rounded-xl'
      >All Products -{'>'} </button>
    </div>
  )
}

export default Home
