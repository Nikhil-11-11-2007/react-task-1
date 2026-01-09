import React from 'react'

const Buttons = ({index,setIndex,setUserData}) => {
    
    return (
        <div className='flex items-center justify-center gap-3 mt-15'>
            <button style={{ opacity: (index == 2) ? '.5' : '1' }} onClick={() => {
                if (index > 2) {
                    setUserData([])
                    setIndex(index - 1)
                }
            }}
                className='px-5 py-2 active:scale-97 cursor-pointer bg-amber-50 text-lg rounded-lg font-semibold text-black'
            >Prev</button>
            <h4>Page {index - 1}</h4>
            <button onClick={() => {
                setUserData([])
                setIndex(index + 1)
            }}
                className='px-5 py-2 active:scale-97 cursor-pointer bg-amber-50 text-lg rounded-lg font-semibold text-black'
            >Next</button>
        </div>
    )
}

export default Buttons
