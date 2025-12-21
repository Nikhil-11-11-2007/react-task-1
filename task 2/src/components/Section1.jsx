import React from 'react'

const Section1 = () => {
    return (
        <div className="w-full h-full bg-black px-[2vw]">
            <div className="flex justify-between items-end rounded-lg w-full h-[88.39vh] px-[7vw] py-[2vw] bg-[url('https://fashion-cohort.vercel.app/assets/hero-uf3nLNuc.png')] bg-cover">
                <div className=' text-white mb-17'>
                    <h1 className='text-[6vw] leading-none font-light'>DESIGN</h1>
                    <h1 className='text-[6vw] leading-none pl-30 font-light'>& FASHION</h1>
                    <p className='pl-30 py-4 w-[67%] text-[1.2vw] font-light opacity-50'>Explore Independent Style by Empracing Uniqueness with our Exclusive Designer Apparel</p>
                </div>
                <div className='flex items-center gap-2 justify-center bg-amber-900 mb-16 opacity-45'>
                    <i className="px-[.6vw] py-[.5vw] text-xl border text-white rounded-[50%] ri-arrow-down-long-fill"></i>
                    <h3 className='text-white'>LEARN MORE</h3>
                </div>
            </div>
        </div>
    )
}

export default Section1
