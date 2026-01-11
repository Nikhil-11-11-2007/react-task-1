const Card = ({elem,id}) => {
    
    return (
        <div style={{borderBottomLeftRadius:`${ id == 1 ? "50%": "2vw"}`, border:`${ id == 1 ? "none": ""}`, backgroundColor:`${ id == 1 ? "#8c00ff": ""}`}}
         className=" card h-[55vh] relative rounded-2xl w-full sm:w-[40%] lg:w-[28%] p-5 py-5 flex flex-col justify-between border-2 border-purple-600">
            <div className="flex items-center p-2 pb-5 border-purple-700 border-b-2 justify-between">
                <h2 className="text-[calc(1vw+1rem)] font-normal w-[50%]">{elem.name}</h2>
                <i style={{position:`${ id == 1 ? "absolute": ""}`, bottom: `${ id == 1 ? "0": ""}`, padding:`${ id == 1 ? "1.5vw": "1.5vw"}`, }}
                 className="text-[calc(1vw+1rem)] rounded-[50%] bg-[#8c00ff] ri-arrow-right-up-long-line"></i>
            </div>
            <p className="text-lg">{elem.description}</p>
            <div style={{borderBottomLeftRadius:`${ id == 1 ? "40vw": ""}`}} className="image overflow-hidden h-50 w-full rounded-3xl">
                <img className="h-full w-full object-cover" src={elem.image} alt="" />
            </div>
        </div>
    )
}
export default Card
