const Card = (props) => {

    console.log(props.info.fullname);
    
    return (
        <div className="card w-[20vw] p-2 bg-[#fcfcfc] relative flex items-center gap-5 justify-between rounded-2xl flex-col">
            <div className="top p-3 flex justify-end items-start h-25 w-full rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url(${props.info.coverImage})`,}}>
                <button className="bg-[#e0dddd89] cursor-pointer text-white px-4 py-1.5 rounded-3xl">{props.info.followed}</button>
            </div>
            <div className="profile h-22 w-22 border-3 text-white rounded-full overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-34">
                <img className="object-cover h-full w-full" src={props.info.profile} alt="" />
            </div>
            <div className="center text-center px-1.5 pt-10">
                <h1 className="text-3xl font-semibold mb-2">{props.info.fullname}</h1>
                <p className="opacity-50">{props.info.description}</p>
            </div>
            <div className="connection text-center font-bold bg-[#f5f5f5] w-full px-10 py-2 rounded-xl shadow-md shadow-[#d5d4d4] flex items-center justify-between gap-8">
                <div className="like">
                    <h2>{props.info.likecount}</h2>
                    <h5 className="opacity-45 font-normal -mt-0.5">Likes</h5>
                </div>
                <div className="post">
                    <h2>690</h2>
                    <h5 className="opacity-45 font-normal -mt-0.5">Posts</h5>
                </div>
                <div className="view  ">
                    <h2>572.6K</h2>
                    <h5 className="opacity-45 font-normal -mt-0.5">Views</h5>
                </div>
            </div>
            <div className="social flex items-center gap-6 text-2xl justify-center">
                <i className="ri-instagram-line"></i>
                <i className="ri-twitter-x-line"></i>
                <i className="ri-at-line"></i>
            </div>
        </div>
    )
}

export default Card
