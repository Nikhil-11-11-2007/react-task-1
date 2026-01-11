const Navbar = () => {
  return (
    <div className='w-full flex items-center font-semibold justify-between border-b-3 border-[#d2d2d2aa] py-5'>
      <div className="nav-pt1 text-[1.2vw] flex gap-[2.5vw]">
        <a href="#">Services</a>
        <a href="#">Work</a>
        <a href="#">About</a>
      </div>
      <div className="nav-center flex gap-[2vw] items-center">
        <img className='h-[3vw] rounded-full' src="https://astratto-design-agency.vercel.app/assets/p-logo-Bx5DqdtJ.png" alt="" />
        <h2 className='text-[3vw] font-semibold'>Astratto</h2>
      </div>
      <div className="nav-pt2 flex items-center gap-[3vw]">
        <h3 className="text-[1.2vw]">Careers</h3>
        <button className='border-2 border-amber-800 gap-2 flex px-[1.2vw] py-1 text-[1.2vw] items-center rounded-[5vw]'>
            Contact Us <i className="font-light text-[1.3vw] text-purple-700 ri-arrow-right-up-long-line"></i></button>
      </div>
    </div>
  )
}

export default Navbar
