import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-19 py-10'>
            <h2 className="text-4xl">CODINGPAGE</h2>
            <div className="flex gap-10">
                <NavLink
                    className='text-3xl'
                    style={({ isActive }) => ({
                        borderBottom: isActive ? "2px solid #dadada" : "none"
                    })} to='/'
                >
                    Home
                </NavLink>
                <NavLink
                    className='text-3xl'
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '2px solid #dadada' : 'none'
                    })}
                    to='/about'>About</NavLink>
                <NavLink
                    className='text-3xl'
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '2px solid #dadada' : 'none'
                    })}
                    to='/courses'>Courses</NavLink>
            </div>
        </div>
    )
}

export default Navbar
