const Images = ({elem}) => {
    return (
        <div>
            <a href={elem.url} target='_blank'>
                <div className='rounded-2xl overflow-hidden h-60 w-65'>
                    <img className='object-cover object-center h-full w-full' src={elem.download_url} alt="" />
                </div>
                <h2 className='font-bold text-xl'>{elem.author}</h2>
            </a>
        </div>
    )
}

export default Images
