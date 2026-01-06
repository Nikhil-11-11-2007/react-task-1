import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [newTheme, setNewTheme] = useState('dark')

  const changeTheme = (theme) => {
    setNewTheme(theme)
    
  }

  return (
    <div style={{backgroundColor: `${(newTheme === 'light')? 'white': `${newTheme}`}`}} 
    className='h-screen flex items-center justify-center flex-col bg-black text-white p-18'>
      <h2 className='mb-6 text-6xl'>The Theme is - {newTheme} </h2>
      <Navbar changeTheme={changeTheme}/>
    </div>
  )
}

export default App
