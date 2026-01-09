import axios from 'axios'
import { useEffect, useState } from 'react'
import Images from './components/Images'
import Buttons from './components/Buttons'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(2)

  const getData = async () => {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(res.data)
  }

  useEffect(() => {
    getData()
  }, [index])

  let printUserData = <h2 className='absolute top-1/2 left-1/2 -translate-1/2 text-7xl' >Loading Please Wait...</h2>

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <div key={idx}>
        <Images elem={elem} />
      </div>
    })
  }

  return (
    <div className='h-screen overflow-auto flex flex-col justify-between items-center bg-black p-10 text-white'>
      <div className='flex flex-wrap gap-7 items-center justify-center'>
        {printUserData}
      </div>

      <Buttons index={index} setIndex={setIndex} setUserData={setUserData} />
    </div>
  )
}

export default App
