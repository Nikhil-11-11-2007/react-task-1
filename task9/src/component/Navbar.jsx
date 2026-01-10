const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between border-b-3 border-[#6b696baa] py-5 '>
      <div className="nav-pt1 flex gap-10">
        <a href="#">Services</a>
        <a href="#">Work</a>
        <a href="#">About</a>
      </div>
      <div className="nav-center flex gap-5 items-center">
        <img className='h-10 rounded-full' src="https://images.yourstory.com/cs/images/companies/1665641444667-1665682335712.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff&format=auto&w=1920&q=75" alt="" />
        <h2 className='text-3xl font-semibold'>Astratto</h2>
      </div>
      <div className="nav-pt2 flex items-center gap-10">
        <h3>Careers</h3>
        <button className='border-2 border-amber-800 gap-2 flex px-5 py-1 items-center rounded-4xl'>
            Contact Us <i className="font-light text-2xl text-purple-900 ri-arrow-right-up-long-line"></i></button>
      </div>
    </div>
  )
}

export default Navbar
