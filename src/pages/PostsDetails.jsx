import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function PostsDetails() {
    const [post, setPost] = useState()
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(data => setPost(data.data))
            .catch(error => console.log(error))

    }, [])
    return (
        post &&
        post.map((data) =>
            <div className=' w- h-svh flex flex-col items-center border bg-gradient-to-r from-indigo-100 to-red-300' key={data.id}>
                <div className='w-1/2 h-2/3 flex flex-col items-center border border-black text-center rounded-xl bg-black/30 mt-5'>
                    <h1 className='mt-5 text-2xl font-bold text-white'>{data.title}</h1>
                    <div className='flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                        <p className='w-1/2 font-sans mt-5 text-white'>{data.body}</p>
                    </div>
                </div>

            </div>
        )
    )
}
