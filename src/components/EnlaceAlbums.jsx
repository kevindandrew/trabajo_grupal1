import React from 'react'
import { Link } from 'react-router-dom'

export default function EnlaceAlbums({ }) {

    return (
        <div id="albums" className='border border-slate-600 rounded-lg w-full h-full bg-gradient-to-r from-violet-500 to-cyan-800 text-lime-400'>
            <ul className='list-none '>
                <li className=''>
                    <Link to={'#'} className='flex justify-center items-center'>
                        <span>
                            Albums
                        </span>
                    </Link>
                </li>
            </ul>

        </div>

    )
}
