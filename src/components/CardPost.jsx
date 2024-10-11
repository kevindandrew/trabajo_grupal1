import React, { useState, useEffect } from 'react'
import PostDetails from './PostDetails';
import { Link } from 'react-router-dom';



export default function CardPost() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Error fetching albums:', error));

    }, []);

    return (

        <div className='flex justify-center'>
            <div className="w-full">
                <ul className='list-none grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                    {post && post?.map((item) => (
                        <div className='border border-blue-900 p-2 rounded-lg shadow-lg bg-gradient-to-r from-yellow-100 to-red-100 m-4'>
                        <li className=' border border-black flex justify-center items-center rounded-md h-32 shadow-sm'>
                            <Link to={`/posts/${item.id}`}>
                            
                            <Link to={`/posts/${item.id}/${item.userId}`}> {<PostDetails item={item}/>} Post </Link>  
                            </Link>
                        </li>
                        <h2 className='font-semibold text-sm px-5 pt-1'>{item.title}</h2>
                        </div>
                    ))}
                </ul>

            </div>
        </div>
    )
}


