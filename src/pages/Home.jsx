import React from 'react'
import NavBar from "../components/NavBar"
export default function Home() {
  return (
    <section className='w-lvw h-full bg-orange-100'>
      <NavBar />
      <div className='flex justify-center w-full h-svh mt-2 gap-x-4 flex-wrap'>
        <div className='w-6/12 bg-black h-2/5 flex justify-center items-center shadow-lg'>
          <h2 className='font-bold cursor-pointer'>Albums</h2>
        </div>
        <div className='w-2/5 bg-red-300 h-2/5 flex justify-center items-center shadow-lg'>
          <h2 className='font-bold cursor-pointer'>Posts</h2>
        </div>
        <div className='w-[91%] h-[45%] bg-slate-400 flex justify-center items-center mb-12 shadow-lg'>
          <h2 className='font-bold cursor-pointer'>Todos</h2>
        </div>
      </div>
    </section>
  )
}