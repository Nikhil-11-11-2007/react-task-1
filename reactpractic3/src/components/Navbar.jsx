import { useState } from "react";

const Navbar = (props) => {

    const [theme, setTheme] = useState('')

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.changeTheme(theme)
        setTheme('')
      }}>
        <input
         onChange={(e) => {
            setTheme(e.target.value)
         }}
         type="text"
         className="border-2 px-3 py-2 text-xl mr-5 w-[25vw] rounded-lg"
         placeholder="Enter color name to change the theme"
         value={theme}
        />
        <button className="bg-blue-500 text-2xl text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  )
}

export default Navbar
