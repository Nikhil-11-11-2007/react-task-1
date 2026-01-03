import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className=' flex gap-6 items-center justify-center h-screen bg-[#330104]'>
      <h1 className='text-8xl underline font-bold absolute top-1/2 left-1/2 -translate-1/2'>Product Page</h1>
      <Link to='/product/mobile'>SelPhones</Link>
      <Link to='/product/laptop'>Laptops</Link>
    </div>
  )
}

export default Product
