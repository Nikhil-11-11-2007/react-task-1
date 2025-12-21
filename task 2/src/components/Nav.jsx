const Nav = () => {
  return (
    <nav className='px-[1vw] py-[1.2vw] bg-black flex items-center justify-between text-white'>
        <h2 className="text-2xl">DVSY</h2>
        <div className="nav-left flex gap-3">
            <span className="px-3 py-3 bg-[#4342428c] uppercase rounded-lg ">Designers</span>
            <span className="px-3 py-3 bg-[#4342429f] uppercase rounded-lg ">collabs</span>
            <span className="px-3 py-3 bg-[#4342429f] uppercase rounded-lg ">events</span>
            <span className="px-3 py-3 bg-[#4342429f] uppercase rounded-lg ">blog</span>
            <span className="px-3 py-3 bg-[#4342429f] uppercase rounded-lg ">card</span>
            <span className="px-3 py-3 bg-[#e57055] uppercase rounded-lg ">get in touch</span>
        </div>
    </nav>
  )
}

export default Nav
