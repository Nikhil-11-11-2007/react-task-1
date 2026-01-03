import { useParams } from "react-router-dom"

const Coursedetail = () => {

    const prms = useParams()
  return (
    <div>
        <h1 className='text-8xl underline font-bold absolute capitalize top-1/2 left-1/2 whitespace-nowrap -translate-1/2'>{prms.korseId} Detail course Page</h1>
    </div>
  )
}

export default Coursedetail
