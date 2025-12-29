import { useState } from "react";
import Card from "./Components/Card";

const App = () => {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [role, setRole] = useState('')
  const [description, setDescription] = useState('')
  const [allusers, setAllusers] = useState([])

  function submitHandler(e) {
    e.preventDefault()
    console.log(allusers);
    setAllusers([...allusers, { name, image, role, description }])
    setName('')
    setImage('')
    setRole('')
    setDescription('')
  }

  function deletHandler(idx) {
    console.log("deleted");
    const copyusers = [...allusers]
    copyusers.splice(idx,1)
    setAllusers(copyusers)
  }

  return (
    <div className="h-screen bg-[#0A2647] flex items-center py-5 px-10 gap-5 text-white">
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className="flex flex-col px-10 py-10 pb-4 w-[30%] gap-10 rounded-2xl bg-[#205295] text-[#dadada]">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          className="px-5 outline-none py-3 text-2xl border-2 rounded "
          type="text"
          placeholder='Enter name' />

        <input
          value={image}
          onChange={(e) => {
            setImage(e.target.value)
          }}
          className="px-5 outline-none py-3 text-2xl border-2 rounded "
          type="text"
          placeholder='Image url' />

        <input
          value={role}
          onChange={(e) => {
            setRole(e.target.value)
          }}
          className="px-5 outline-none py-3 text-2xl border-2 rounded "
          type="text"
          placeholder='Enter role' />

        <input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          className="px-5 outline-none py-3 text-2xl border-2 rounded "
          type="text"
          placeholder='Enter Description' />

        <button className="text-white active:scale-97 cursor-pointer font-medium bg-emerald-700 py-4 text-2xl rounded-2xl"> Create user</button>
      </form>
      <div className="w-[68%] h-[71vh] rounded-2xl p-9 flex gap-7 no-scrollbar overflow-auto bg-[#205295]">
        {allusers.map((elem,idx)=> {
          return <Card key={idx} elem={elem} deletHandler={deletHandler} idx={idx}/>
          
        })}
      </div>
    </div>
  )
}

export default App
