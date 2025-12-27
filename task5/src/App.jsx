import { useState } from "react";

const App = () => {

  const [username, setUsername] = useState('')
  const [useremail, setEmail] = useState('')
  const [detail, setDetail] = useState('')
  const [allnames, setAllnames] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setAllnames([...allnames, { username, useremail, detail }])
    console.log(allnames);
    setUsername("")
    setEmail("")
    setDetail("")
  }

  return (
    <div className='bg-[#222] text-white h-screen w-screen px-5 py-5'>
      <div className="cont flex justify-center gap-10 h-full w-full ">
        <form onSubmit={(e) => {
          submitHandler(e)
        }}
          className='h-full py-6 px-10 rounded-2xl flex flex-col items-center justify-evenly  bg-black w-[30%]'>
          <input onChange={(det) => {
            setUsername(det.target.value)
          }} value={username} required
            className='w-full outline-none rounded-md bg-[#dadada] text-black p-3 text-2xl'
            type="text" placeholder='Enter your name' />
          <input onChange={(det) => {
            setEmail(det.target.value)
          }} value={useremail} required className='w-full outline-none rounded-md bg-[#dadada] text-black p-3 text-2xl' type="email" placeholder='Enter your email' />
          <textarea onChange={(det) => {
            setDetail(det.target.value)
          }} value={detail} required cols={10} rows={5} className='w-full outline-none rounded-md bg-[#dadada] text-black p-3 text-2xl' placeholder='Enter Your Message'></textarea>
          <button className='w-full active:scale-97 cursor-pointer rounded-2xl bg-[#fef4e8] text-[#030303] font-semibold py-3 text-3xl'>Submit</button>
        </form>

        <div className="content rounded-2xl h-full bg-black w-[40%] overflow-auto px-10 py-9">
          {allnames.map((e, idx) => {
            return <div key={idx} className="request relative w-full mb-5 bg-[#ecf7db] text-black font-mono rounded-2xl flex flex-col items-start gap-3 px-10 py-5">
              <h1 className='text-2xl capitalize font-bold'>{e.username}</h1>
              <h3 className="opacity-55">{e.useremail}</h3>
              <p>{e.detail}</p>
              <button className='bg-[green] text-white rounded-full text-[10px] px-2 py-1 bottom-5 right-5 absolute'> sent ✓</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App


{/* <div className="request relative w-full mb-5 bg-[#ecf7db] text-black font-mono rounded-2xl flex flex-col items-start gap-3 px-10 py-5">
            <h1 className='text-2xl capitalize'>harsh</h1>
            <h3>ABC@gmail.com</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, nemo.</p>
            <button className='bg-[green] text-white rounded-full text-[10px] px-2 py-1 bottom-5 right-5 absolute'> sent ✓</button>
          </div> */}