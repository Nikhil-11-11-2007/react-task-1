const Section3 = () => {
  return (
    <div className="section3 min-h-screen w-full bg-black text-white flex flex-col gap-[3vw] pb-3 px-[2vw]">
      <div className="top w-full flex justify-between">
        <div className="left h-[70] w-[49.5%] rounded-2xl">
            <img className="object-cover rounded-2xl h-full w-full" src="https://fashion-cohort.vercel.app/assets/shadowgirl-DsICo5Us.png" alt="" />
        </div>
        <div className="right flex flex-col justify-between gap-4 w-[49.5%]">
            <div className="right-up rounded-2xl w-full bg-[#262626] flex py-[3vw] px-[2vw]">
                <div className="right-up-left mb-6">
                    <h2>INDEPENDENT DESIGNERS</h2>
                    <p className="w-[90%] opacity-50 mt-4 text-[1vw]">Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovatio of the artists behind them. Explore curated collections showcasing unique creations by independent designers.</p>
                </div>
                <div className="flex items-center opacity-45 gap-3 mt-12">
                    <i className="rounded-[50%] border-2 bg-[#444444] text-1xl px-2.5 py-1.5 ri-arrow-right-up-long-line"></i>
                    <h4 className="uppercase text-[1vw]">EXPLORE</h4>
                </div>
            </div>
            <div className="right-down rounded-2xl w-full bg-[#262626] flex py-[3vw] px-[2vw]">
                <div className="right-up-left mb-6">
                    <h2>EXCLUSIVE & UNIQUITY</h2>
                    <p className="w-[90%] opacity-50 mt-4 text-[1vw]">Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusively.</p>
                </div>
                <div className="flex items-center opacity-45 gap-3 mt-12">
                    <i className="rounded-[50%] border-2 bg-[#444444] text-1xl px-2.5 py-1.5 ri-arrow-right-up-long-line"></i>
                    <h4 className="uppercase text-[1vw]">EXPLORE</h4>
                </div>
            </div>
        </div>
      </div>
      <div className="bottom w-full flex flex-row-reverse justify-between">
        <div className="left h-[70] w-[49.5%] rounded-2xl">
            <img className="object-cover rounded-2xl h-full w-full" src="https://fashion-cohort.vercel.app/assets/skeleton-yZ9e2IZ8.png" alt="" />
        </div>
        <div className="right flex flex-col justify-between gap-4 w-[49.5%]">
            <div className="right-up rounded-2xl w-full bg-[#262626] flex py-[3vw] px-[2vw]">
                <div className="right-up-left mb-6">
                    <h2>HIGH QUALITY</h2>
                    <p className="w-[90%] opacity-50 mt-4 text-[.99vw]">Embrace superior craftsmanship with our meticulously curated,enduringly high-quality garments. Discover garments crafted with utmost attention to detail and finest materials,promising longevity and timeless style.</p>
                </div>
                <div className="flex items-center opacity-45 gap-3 mt-12">
                    <i className="rounded-[50%] border-2 bg-[#444444] text-1xl px-2.5 py-1.5 ri-arrow-right-up-long-line"></i>
                    <h4 className="uppercase text-[1vw]">EXPLORE</h4>
                </div>
            </div>
            <div className="right-down rounded-2xl w-full bg-[#262626] flex py-[3vw] px-[2vw]">
                <div className="right-up-left mb-6">
                    <h2>ECO-FRIENDLY</h2>
                    <p className="w-[90%] opacity-50 mt-4 text-[1vw]">Join our commitment to sustainability with eco-friendly fashion options, stylish yet mindflu of our planet. Explore guilt-free shopping with our eco-conscious collections, crafted with planet-friendly materials and ethical practices.</p>
                </div>
                <div className="flex items-center opacity-45 gap-3 mt-12">
                    <i className="rounded-[50%] border-2 bg-[#444444] text-1xl px-2.5 py-1.5 ri-arrow-right-up-long-line"></i>
                    <h4 className="uppercase text-[1vw]">EXPLORE</h4>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
