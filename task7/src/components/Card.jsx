const Card = ({change,data}) => {

    return (
        <>
            <div className="card h-[55vh] w-[80%] rounded-2xl bg-[#D25353] border-8 border-[#EA7B7B] shadow-[0px_0px_100px_#ff0037] flex items-start flex-col gap-19 px-10 py-5 relative">
                <h2 className='text-2xl font-semibold text-shadow-[0_1px_4px_#ff0037] bg-[#EA7B7B] px-6 py-2 rounded-lg'>Motivational Quote</h2>
                <p className='text-3xl text-shadow-[2px_3px_6px_#ff0037]'>{data.quote}</p>
                <h4 className='text-2xl font-bold text-shadow-[0_1px_4px_#ff0037] bg-[#EA7B7B] rounded-lg px-7 font-mono capitalize py-2 absolute bottom-5 right-6'>{`-${data.author}`}</h4>
            </div>

            <button onClick={() => {
                change()
            }} className="px-10 py-3 rounded-lg active:scale-95 mt-10 cursor-pointer bg-[#EA7B7B] ">Change</button>
        </>
    )
}

export default Card
