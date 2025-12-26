import Card from "./Card";

const Section = () => {

    const cardData = [
        { title: "Legends of the Emerald Mist", img: "https://i.pinimg.com/736x/d5/1a/e5/d51ae5869bd31cb9c0c6387294d3bbb8.jpg" },
        { title: "Midnight Mischef Squad", img: "https://i.pinimg.com/1200x/4b/56/6c/4b566c7137d5e829cb00857d46eb52d5.jpg" },
        { title: "Rise of the Last Guardian", img: "https://i.pinimg.com/1200x/4d/65/e6/4d65e63118900ddf9cc4b20f750cb38f.jpg" },
        { title: "Pokemon The Pikachu", img: "https://i.pinimg.com/1200x/72/4f/d8/724fd88445474558835540e0224a1c5c.jpg" },
        { title: "Mickey and Mouse", img: "https://i.pinimg.com/1200x/95/23/81/9523813744cc09bee25f67e44ecb0051.jpg" },
        { title: "Legends of the Emerald Mist", img: "https://i.pinimg.com/736x/d5/1a/e5/d51ae5869bd31cb9c0c6387294d3bbb8.jpg" },
        { title: "Midnight Mischef Squad", img: "https://i.pinimg.com/1200x/4b/56/6c/4b566c7137d5e829cb00857d46eb52d5.jpg" },
        { title: "Rise of the Last Guardian", img: "https://i.pinimg.com/1200x/4d/65/e6/4d65e63118900ddf9cc4b20f750cb38f.jpg" },
        { title: "Pokemon The Pikachu", img: "https://i.pinimg.com/1200x/72/4f/d8/724fd88445474558835540e0224a1c5c.jpg" },
        { title: "Mickey and Mouse", img: "https://i.pinimg.com/1200x/95/23/81/9523813744cc09bee25f67e44ecb0051.jpg" },
    ]

    return (
        <div className='section min-h-[40vh] w-full text-white py-2'>
            <div className="flex w-full items-center justify-between px-4">
                <h2 className="text-2xl">Continue Watching</h2>
                <button className="px-7 py-2 bg-[#dadada53] rounded-sm text-sm">See All</button>
            </div>
            <div className="container w-full flex shrink-0 overflow-auto gap-3.5 px-2 py-3 no-scrollbar">
                {
                    cardData.map((elem,idx) => {
                        return <Card detail={elem} key={idx} />
                    })
                }
            </div>     
        </div>
    )
}

export default Section
