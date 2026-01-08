import { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContex'
import { Link } from 'react-router-dom'

const Products = () => {

  const AllProductData = useContext(ProductDataContext)

  let renderData = 'Loading...'

  if (AllProductData.length > 0) {
    renderData = AllProductData.map((elem, idx) => {
      return <Link className='cursor-pointer active:scale-97 bg-[#ffffff39] block w-70 rounded-xl' key={idx} to={`/products/${elem.id}`}>
        <div className='flex text-center py-2 flex-col gap-3 px-2 items-center justify-center'>
          <img className='h-65 p-5' src={elem.image} alt="" />
          <h2>{elem.title}</h2>
          <h2 className='text-blue-400'>{"$" + elem.price}</h2>
        </div>
      </Link>
    })
  }

  return (
    <div>
      <div className='p-5'>
        <h2 className='text-3xl'>All Products</h2>
      </div>
      <div className='py-2 min-h-screen gap-5 flex justify-center flex-wrap bg-black text-white'>
        {renderData}
      </div>
    </div>
  )
}

export default Products
