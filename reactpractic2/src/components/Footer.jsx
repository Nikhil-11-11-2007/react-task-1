import { useNavigate } from "react-router-dom"

const Footer = () => {

    const navigate = useNavigate()
  return (
    <div className='w-full absolute bottom-0 flex items-center bg-[#111] justify-end p-10'>
      {/* <h2>Footer</h2> */}
      <button onClick={() => {
        navigate('/courses')
      }} className=' cursor-pointer px-5 py-2 bg-fuchsia-600 text-xl rounded-lg '>More info-</button>
    </div>
  )
}

export default Footer
