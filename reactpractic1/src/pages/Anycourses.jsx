import { useParams } from "react-router-dom";

const Anycourses = () => {
    const param = useParams()   
  return (
    <div className="h-screen bg-auto">
      <h1 className='text-8xl whitespace-nowrap capitalize underline font-bold absolute top-1/2 left-1/2 -translate-1/2'>{param.korseId} course Page</h1>
    </div>
  )
}

export default Anycourses
