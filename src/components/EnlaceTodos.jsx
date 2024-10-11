import React from 'react'
import { Link } from 'react-router-dom'

export default function EnlaceTodos({ }) {

    return (
        <div className='border border-slate-600 rounded-lg w-full h-full bg-gradient-to-r from-violet-300 to-cyan-400 text-slate-600'>
            <ul className='list-none '>
                <li className=''>
                    <Link to={'#'} className='flex justify-center items-center'>
                        <span>
                            Todos
                        </span>
                    </Link>
                </li>
            </ul>

        </div>

    )
}