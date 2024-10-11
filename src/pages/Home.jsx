import React from 'react';
import { Link } from 'react-router-dom';
import Album from '../components/Album';

export default function Home() {
  return (
    <section className='w-full h-full bg-orange-100'>
      <div className='flex justify-center w-full h-screen mt-2 gap-x-4 flex-wrap'>
        <div className='w-6/12 bg-black h-2/5 flex justify-center items-center shadow-lg'>
          <Link to="./albums" className='font-bold text-white cursor-pointer'>Albums</Link>
        </div>
        <div className='w-2/5 bg-red-300 h-2/5 flex justify-center items-center shadow-lg'>
          <Link to="/posts" className='font-bold text-white cursor-pointer'>Posts</Link>
        </div>
        <div className='w-[91%] h-[45%] bg-slate-400 flex justify-center items-center mb-12 shadow-lg'>
          <Link to="/todos" className='font-bold text-white cursor-pointer'>Todos</Link>
        </div>
      </div>
    </section>
  );
}
