const Card = (props) => {
    
    return (
        <div style={{ backgroundImage: `url(${props.detail.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
            className="card h-50 w-[20vw] shrink-0 rounded-2xl flex items-end py-4 px-3">
            <div className="bottom flex flex-col gap-2 w-full">
                <h1>{props.detail.title}</h1>
                <h6 className='text-sm'>30min 55sec</h6>
                <div className='line h-1.5 rounded-2xl w-full bg-[#e3dede3e]'>
                    <div className='h-full rounded-3xl bg-[#b198e1] w-[40%]'></div>
                </div>
            </div>
        </div>

    )
}

export default Card
