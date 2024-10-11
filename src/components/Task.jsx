import React from 'react'


/* style={{ color: `${task.completed ? '#00ce00' : '#ff0000'}` }} */

export default function Task({ task }) {
    return (
        <button>
            <div className="flex flex-col justify-between w-64 h-64 p-6 bg-white border border-gray-200 rounded-lg shadow">
                <span className='text-end' style={{ color: `${task.completed ? '#00ce00' : '#ff0000'}` }}>{task.completed ? 'completed' : 'pending'}</span>
                <h5 className="text-xl text-center font-bold tracking-tight text-gray-90">{task.title}</h5>
                <div><p className='hidden'>Texto oculto</p></div>
            </div>
        </button>
    )
}
