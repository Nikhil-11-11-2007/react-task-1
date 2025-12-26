import React from 'react'

const Sidebar = () => {

  const menu1 = [
    {icon: "ri-home-4-fill", label: "Home"},
    {icon: "ri-eye-line", label: "Explore"},
    {icon: "ri-database-2-line", label: "Genres"},
    {icon: "ri-bookmark-line", label: "Favourite"},
  ]

  const menu2 = [
    {icon: "ri-play-large-line", label: "Continue Watching"},
    {icon: "ri-timer-2-line", label: "Recently Added"},
    {icon: "ri-folder-open-line", label: "My Collection"},
    {icon: "ri-download-2-line", label: "Downloads"},
  ]
  return (
    <div className='w-[15vw] h-[112vh] flex flex-col border rounded-md border-[#dadada40] backdrop-blur-3xl bg-[#9373c427] text-gray-300 p-5'>
      <div className='flex justify-between items-center'>
        <button className=' whitespace-nowrap text-md font-medium'>🎬 Drameeo </button>
        <i className="text-lg ri-menu-unfold-4-line"></i>
      </div>
      <ul className='mt-5 opacity-60 space-y-2 border-b text-sm border-[#dadada50] pb-6'>
        {menu1.map((elem,idx) => <li key={idx}><i className={`mr-3 ${elem.icon}`}></i>{elem.label}</li>)}
      </ul>
      <ul className='mt-5 opacity-60 space-y-2 border-b text-sm border-[#dadada50] pb-6'>
        {menu2.map((elem2,idx) => <li className='whitespace-nowrap' key={idx}><i className={`mr-3 ${elem2.icon}`}></i>{elem2.label}</li>)}
      </ul>
      <h3 className='mt-6'><i className="mr-3 ri-settings-3-line"></i>Setting</h3>
      <h3 className='mt-auto'><i className="mr-3 ri-expand-right-line"></i>Logout</h3>
    </div>
  )
}

export default Sidebar
