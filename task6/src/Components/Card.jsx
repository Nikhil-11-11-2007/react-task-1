
const Card = (props) => {

    return (
        <div className="card text-[#000000] bg-[#dededed5] shrink-0 w-[24vw] p-3 flex items-center text-center justify-center flex-col gap-7 rounded-2xl">
            <img className="h-30 w-30 object-cover object-center rounded-full" src={props.elem.image} alt="" />
            <h1 className="text-2xl font-semibold capitalize">{props.elem.name}</h1>
            <h2 className="text-[2vw] text-[#205295] font-medium -mt-3 capitalize">{props.elem.role}</h2>
            <p className="text-lg -mt-4 font-semibold w-[95%] ">{props.elem.description}</p>
            <button onClick={() => {
                props.deletHandler(props.idx)
            }} className="px-7 font-medium text-xl active:scale-97 text-[#dadada] cursor-pointer py-3 bg-[rgb(253,82,82)] rounded-xl">Remove</button>
        </div>
    )
}

export default Card
