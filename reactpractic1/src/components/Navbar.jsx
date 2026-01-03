import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between px-15 py-8 bg-amber-900 items-center">
        <h2>Navbar</h2>
        <input type="text" placeholder="Search" className="px-2 py-1 bg-[#ffffff3c]" />
        <div className="flex gap-5">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/product'>Product</Link>
          <Link to='/courses'>Courses</Link>
        </div>
      </nav>
  )
}

export default Navbar
