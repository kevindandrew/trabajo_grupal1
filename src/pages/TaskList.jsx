import React, { useEffect, useState } from 'react'
import Task from "../components/Task"

async function getData(url) {
    const data = await fetch(url)
    const js = await data.json()

    return js
}

export default function TaskList() {
    const [tasks, setTasks] = useState([])
    const [filter, setFilter] = useState('todos') 

    useEffect(() => {
        getData('https://jsonplaceholder.typicode.com/todos')
            .then((data) => setTasks(data))
    }, [])

  
    const showAllTasks = () => setFilter('todos')
    const showPendingTasks = () => setFilter('pendiente')
    const showCompletedTasks = () => setFilter('completados')


    const filteredTasks = tasks.filter((task) => {
        if (filter === 'todos') return true
        if (filter === 'pendiente') return !task.completed
        if (filter === 'completados') return task.completed
    })

    return (
        <>
            <div className='flex justify-around'>
                <button
                    className='bg-amber-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={showAllTasks} 
                >
                    Todos
                </button>

                <button
                    className='bg-lime-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={showPendingTasks} 
                >
                    Pendientes
                </button>

                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={showCompletedTasks} 
                >
                    Completadas
                </button>
            </div>

            <div className='grid grid-cols-4 gap-4 py-5 px-20'>
                {
                    filteredTasks.map((task) =>
                        <Task
                            key={task.id}
                            task={task}
                        />)
                }
            </div>
        </>
    )
}
