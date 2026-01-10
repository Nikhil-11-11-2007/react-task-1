import Waveline from './Waveline'
const Section1 = () => {
    return (
        <div className='relative w-full h-[85vh] flex justify-between '>
            <div className="left relative w-[28%] h-full py-7 flex flex-col justify-between items-center">
                <div className="top flex flex-col items-center">
                    <img style={{ borderTopLeftRadius: '1vw', borderTopRightRadius: '1vw', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}
                        className=' h-75 w-65 -rotate-7' src="https://play-lh.googleusercontent.com/Y1dZdIFBqgm-joHH9EixFmaAvEYRc3gUyVYU7QZOg-a46QFtnD9gqDxvTUqlC64KOTQ=w240-h480-rw" alt="" />
                    <div className='absolute top-90 left-0 '>
                        <Waveline width={420} mr={0} />
                    </div>
                </div>
                <div className="bottom flex -rotate-7">
                    <button className='border-3 text-xl border-amber-600 px-10 rounded-[4vw]'>Create Magic</button>
                    <img className='rounded-full h-15' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSexdFH2m0nxyseqfkv4tp-F8LdoZmyGkTC1L3eI65AB-UJIxsy" alt="" />
                </div>
            </div>
            <div className="center font-semibold flex py-10  flex-col items-center justify-between gap-10 ">
                <h4 className='text-[#545252] text-lg'>Ignating the Spark of Inspiration</h4>
                <h1 className='text-7xl text-center flex flex-col items-center gap-2'>
                    <h2>Unleash Your</h2>
                    <div className='flex items-center gap-5'>
                        Brand
                        <img className='h-20 rounded-full' src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=contain,w=200,h=200,q=100/sites/www.builtin.com/files/2021-12/cornerstone%20ondemand.jpg " alt="" />
                        With our
                    </div>
                    <div className='flex items-center gap-3'>
                        <h2 className='rotate-2 pb-4 rounded-2xl px-3 text-purple-700 font-semibold bg-[#e1e17d]'>Magico</h2>
                        <h2>Design</h2>
                    </div>
                </h1>
                <div className="line">
                    <Waveline width={490} mr={5} />
                </div>
            </div>
            <div className="right w-[28%] h-full py-6 flex flex-col justify-between ">
                <div className="top flex flex-col text-white w-full gap-1.5 items-end">
                    <button className='rounded-4xl px-5 py-1 bg-purple-700'>Via della Creativita, 23</button>
                    <button className='rounded-4xl px-5 py-1 bg-purple-700'>20121 Milano</button>
                </div>
                <img style={{ borderBottomLeftRadius: '1vw', borderBottomRightRadius: '1vw', borderTopLeftRadius: '49%', borderTopRightRadius: '49%' }}
                    className=' h-75 w-65 rotate-10 object-cover mr-16' src="https://inspgr.id/app/uploads/2024/05/typography-axel-vincent-09-1536x1536.jpg" alt="" />
            </div>
        </div>
    )
}

export default Section1
// https://inspgr.id/app/uploads/2024/05/typography-axel-vincent-09-1536x1536.jpg