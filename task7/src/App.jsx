import { useEffect, useState } from 'react'
import Card from './components/Card'
import axios from 'axios'

const App = () => {

  const [allData, setAllData] = useState([])

  const getData = async () => {

    const res = await axios.get(`https://dummyjson.com/quotes/random?tag=motivational`)
    setAllData(res.data)
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className='bg-[#9E3B3B] h-screen text-2xl text-[#FFEAD3] flex items-center justify-center flex-col gap-10'>
      <Card change={getData} data={allData} />
    </div>
  )
}

export default App

// https://dummyjson.com/quotes/random?tag=motivational
