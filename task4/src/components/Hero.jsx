const Hero = () => {
  return (
    <div className="h-[65vh] mt-5 px-8 flex flex-col justify-between text-white py-8 rounded-2xl bg-[url('https://i.pinimg.com/1200x/ec/57/29/ec5729f71a561ffa9fe5697092e396ae.jpg')] bg-cover bg-center">
      <h2 className="bg-[#d5d4d427] px-4 py-2 w-fit rounded-4xl">🔥Now Trending</h2>
      <div className="container flex flex-col gap-3">
        <div className="btn flex gap-2">
          <h3 className="bg-[#d5d4d427] rounded-3xl px-5 py-1">Drama</h3>
          <h3 className="bg-[#d5d4d427] rounded-3xl px-5 py-1">Fantasy</h3>
        </div>
        <h1 className="text-6xl font-medium w-[50%]">Dimensional Kids on an Advanture</h1>
        <p className="w-[47%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maxime vero eum amet eveniet! Aspernatur libero quod saepe quos minus?</p>
        <div className="flex items-center justify-between mt-3">
          <div className="btns flex gap-3 bottom mt-4">
            <button className="flex items-center gap-2 text-black font-medium bg-[#b198e1] px-3 py-1 rounded-md"><i className="ri-play-mini-fill"></i><h3>Watch Now</h3></button>
            <button className="px-3 py-2 rounded bg-[#d5d4d427]"><i className="ri-download-2-line"></i></button>
            <button className="px-3 py-2 rounded rotate-90 bg-[#d5d4d427]"><i className="ri-more-2-line"></i></button>
          </div>
          <div className="bg-[#ffffff47] px-2 rounded-3xl flex items-center justify-between h-10 w-[8vw]">
            <div className="box h-2 w-10 rounded-2xl bg-[#dadada]"></div>
            <div className="box h-2 w-5 rounded-2xl bg-[#ffffff47]"></div>
            <div className="box h-2 w-5 rounded-2xl bg-[#ffffff47]"></div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
