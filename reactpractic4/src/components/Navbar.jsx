import { useContext } from "react"
import { DataUserContext } from "../context/UserContext"

const Navbar = () => {

    const user = useContext(DataUserContext)

  return (
    <div className='h-20 bg-emerald-950 w-full'>
      <h2>Navbar</h2>
      <h1>{user.userData.age}</h1>
    </div>
  )
}

export default Navbar
