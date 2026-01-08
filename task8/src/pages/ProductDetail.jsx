import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContex'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

    const Productdata = useContext(ProductDataContext)    

    const {productId}  = useParams()

    let selectedProduct = {}

    if(Productdata.length>0) {
        selectedProduct = Productdata.find((elem) => productId == elem.id)
    }

    console.log(selectedProduct);
    
    
    
  return (
    <div className='py-3 min-h-screen gap-5 flex justify-center flex-wrap bg-black text-white'>
      <div className='flex w-150 text-center py-2 flex-col gap-15 px-2 items-center justify-center'>
        <img className='h-100' src={selectedProduct.image} alt="" />
        <h2 className='text-4xl'>{selectedProduct.title}</h2>
        <h2 className='text-blue-400 text-4xl '>{"$" + selectedProduct.price}</h2>
      </div>
    </div>
  )
}

export default ProductDetail
