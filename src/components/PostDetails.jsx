import React from 'react'


export default function PostDetails({ item }) {

    return (
        <div className='border border-l-orange-500 rounded-3xl  mt-6 mx-4'>
            <p className=' text-md px-10 pb-3'>{item.body}</p>
        </div>
    )
}
