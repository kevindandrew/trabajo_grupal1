import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'

async function getData(url) {
    const data = await fetch(url)
    const js = await data.json()

    return js
}

export default function Posts() {

    const [posts, setPosts] = useState()

    useEffect(() => {
        getData('https://jsonplaceholder.typicode.com/posts')
            .then((data) => setPosts(data))
    }, [])

    return (
        <>
            <SearchBar />

            <div className='grid grid-cols-4 gap-4 py-5 px-20'>
                {
                    posts && posts.map((item) =>
                        <div key={item.id} className='flex flex-col justify-center items-center'>
                            <button className='flex items-center justify-center w-64 h-64 bg-white border border-gray-200 rounded-lg shadow'>
                                <span className='text-xs'>{item.body}</span>
                            </button>
                            <span className='text-xs text-center h-8'>{item.title}</span>
                        </div>
                    )
                }
            </div>
        </>
    )
}
