const Header = () => {
  return (
    <div className="header py-2 flex justify-between">
      <input type="text" placeholder="🔍 Search for films, directors, or actors..." 
      className="bg-[#1e1c2c] text-white px-3 border border-[#dadada30] rounded-lg py-2 w-[23vw] " />
       <div className="profile flex gap-5 items-center">
        <span className="px-2 py-1 bg-[#ffffff1a] rounded-full relative ">
            <div className="absolute h-2 w-2 left-4 top-1.5 bg-red-500 rounded-full circle"></div>
            <i className="ri-notification-3-line text-white font-light"></i></span>
        <img src="https://i.pravatar.cc/40" className="rounded-full" />
       </div>
    </div>
  )
}

export default Header
// bg-[url('https://www.pngall.com/wp-content/uploads/8/Magnifying-Glass-Search-PNG-Image.png')]
//        bg-no-repeat bg-[length:25px] bg-[position:10px_center]