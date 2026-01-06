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
         className="border-2 px-3 py-2 mr-5"
         placeholder="Enter theme"
         value={theme}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Navbar
