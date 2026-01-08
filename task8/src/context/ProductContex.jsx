import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAllProductData } from '../api/product'

export const ProductDataContext = createContext()

const ProductContex = (props) => {

    const [productData, setProductData] = useState([])

    const setData = async () => {
        setProductData(await getAllProductData())
    }

    useEffect(() => {
        setData()
    }, [])

    return (
        <div className='bg-black h-screen text-white'>
            <ProductDataContext.Provider value={productData}>
                {props.children}
            </ProductDataContext.Provider>
        </div>
    )
}

export default ProductContex
