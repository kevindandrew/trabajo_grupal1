import React from 'react'

function CardPhoto(title, url) {
  return (
    <div>
      <div className='flex h-60 rounded-md overflow-hidden'>
                <img className='w-full object-cover' src={`${url}`}/>
            </div>
            <div className='font-bold text-lg'>{`${title}`}</div>
    </div>
  )
}

export default CardPhoto
