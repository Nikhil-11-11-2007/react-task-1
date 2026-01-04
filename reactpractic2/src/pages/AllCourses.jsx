import React from 'react'
import { Link } from 'react-router-dom'

const AllCourses = () => {
    return (
        <div>
            <h2 className='text-center text-5xl font-bold mt-5'>All Courses</h2>
            <div className='text-5xl flex gap-15 text-center font-bold absolute top-80 left-[50%] -translate-x-1/2 text-[#dadada]'>
                <Link className='border-b-2' to='/courses/java'>Java Course</Link>
                <Link className='border-b-2' to='/courses/python'>Python Course</Link>
            </div>
        </div>
    )
}

export default AllCourses
    // < Link to = '/courses/java' > Java Course</Link >
    //     <Link to='/courses/python'>Python Course</Link>