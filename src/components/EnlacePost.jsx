import React from 'react'
import { Link } from 'react-router-dom'

export default function EnlacePost({ }) {


    return (
        <div className='border border-slate-600 rounded-lg w-full h-full'>
            <ul className='list-none '>
                <li className=''>
                    <Link to={'#'} className='flex justify-center items-center'>
                        <span>
                            Post
                        </span>
                    </Link>
                </li>
            </ul>

        </div>

    )
}
