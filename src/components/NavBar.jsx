import React from 'react'

export default function NavBar() {
    return (
        <nav className='border border-b-blue-800 bg-teal-300'>
            <div className='flex justify-end m-2'>
                <figure>
                    <img className='rounded-full' src="https://picsum.photos/50/50" alt="image profile" />
                </figure>
                <button id="dropdown-button" 
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 rounded-lg cursor-pointer  dark:text-black " type="button">@user.com <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg></button>
            </div>

        </nav>



    )
}
