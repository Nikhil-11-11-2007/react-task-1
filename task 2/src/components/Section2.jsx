const Section2 = () => {
    return (
        <div className="section2 min-h-screen w-full bg-black px-[2vw]">
            <div className="top w-full py-4">
                <div className="cards flex items-start justify-between w-full ">
                    <div className="text-white h-[35vh] card w-[24%]  bg-[#262626] rounded-2xl pl-[2.5vw] py-[2.5vw]">
                        <h1 className="uppercase text-[1.2vw]">Independency</h1>
                        <p className="opacity-50 mt-4">Explore the creativity of independent designers from around the globe.</p>
                        <div className="flex items-center opacity-45 gap-3 mt-12">
                            <i className="rounded-[50%] border-2 bg-[#444444] text-1xl px-2.5 py-1.5 ri-arrow-right-up-long-line"></i>
                            <h4 className="uppercase text-[1vw]">learn more</h4>
                        </div>
                    </div>
                    <div className="text-white h-[35vh] card w-[24%]  bg-[#262626] rounded-2xl pl-[2.5vw] py-[2.5vw]">
                        <h1 className="uppercase text-[1.2vw]">UNIQUITY</h1>
                        <p className="opacity-50 mt-4">Discover the charm of unique pieces that stand out effortlessly..</p>
                        <div className="flex items-center opacity-45 gap-3 mt-12">
                            <i className="rounded-[50%] border-2 bg-[#444444] text-1xl px-2.5 py-1.5 ri-arrow-right-up-long-line"></i>
                            <h4 className="uppercase text-[1vw]">learn more</h4>
                        </div>
                    </div>
                    <div className="text-white h-[35vh] card w-[24%]  bg-[#262626] rounded-2xl pl-[2.5vw] py-[2.5vw]">
                        <h1 className="uppercase text-[1.2vw]">QUANTITY</h1>
                        <p className="opacity-50 mt-4">Experience unparalleled craftsmanship and attention to detail.</p>
                        <div className="flex items-center opacity-45 gap-3 mt-12">
                            <i className="rounded-[50%] border-2 bg-[#444444] text-1xl px-2.5 py-1.5 ri-arrow-right-up-long-line"></i>
                            <h4 className="uppercase text-[1vw]">learn more</h4>
                        </div>
                    </div>
                    <div className="text-white h-[35vh] card w-[24%]  bg-[#262626] rounded-2xl pl-[2.5vw] py-[2.5vw]">
                        <h1 className="uppercase text-[1.2vw]">SUSTAINABILITY</h1>
                        <p className="opacity-50 mt-4">Embrace eco-conscious fashion choices wothout compromising on style.</p>
                        <div className="flex items-center opacity-45 gap-3 mt-12">
                            <i className="rounded-[50%] border-2 bg-[#444444] text-1xl px-2.5 py-1.5 ri-arrow-right-up-long-line"></i>
                            <h4 className="uppercase text-[1vw]">learn more</h4>
                        </div>
                    </div>
                </div>
                <div className="top-bottom w-full mt-8 px-8 py-6 text-white flex items-center justify-between">
                    <div className="text-center">
                        <h4 className="text-[1.2vw] font-light">DESIGNERS</h4>
                        <h1 className="text-5xl font-medium">150+</h1>
                    </div>
                    <div className="text-center">
                        <h4 className="text-[1.2vw] font-light">CLIENTS</h4>
                        <h1 className="text-5xl font-medium">500+</h1>
                    </div>
                    <div className="text-center">
                        <h4 className="text-[1.2vw] font-light">MASTERPIECES</h4>
                        <h1 className="text-5xl font-medium">20K+</h1>
                    </div>
                    <div className="text-center">
                        <h4 className="text-[1.2vw] font-light">EVENTS</h4>
                        <h1 className="text-5xl font-medium">50+</h1>
                    </div>
                </div>
            </div>
            <div className="bottom w-full flex items-center justify-between">
                <div className="left h-full rounded-2xl px-11 py-7 flex flex-col gap-17  w-[49.5%] bg-[#262626] text-white">
                    <h2 className="font-medium text-[1.1vw]">ABOUT</h2>
                    <h1 className="text-5xl mt-5 font-medium">WHERE FASHION MEETS FREEDOM</h1>
                    <div className="content flex gap-7 mb-5 text-[1vw]">
                        <p>We believe that fashion should be an emprression of individuality. We encourage creativity and originality in every item we offer, presenting Customers with exclusive collections from independent desighners. With a commitment to fostering a community of creativity and innovation,</p>
                        <p>we strive to connect designers with fashion enthusiasts who appreciate the artistry and individuality behind each piece. Driven by our dedication to authenticity, we curate each collection with a keen eye for unique designs that inspire confidence and self-expression.</p>
                    </div>
                </div>
                <div className="right h-[70vh] w-[49.5%]">
                    <img className="w-full h-full object-cover rounded-2xl" src="https://fashion-cohort.vercel.app/assets/coat-DkwKoeKB.png" alt="" />
                </div>
            </div>
            <div className="h1 px-[5vw] pt-[4vw] pb-[2vw]  w-full bg-black">
                <h1 className="text-white text-4xl">OUR ADVANTAGES</h1>
            </div>
        </div>
    )
}

export default Section2
