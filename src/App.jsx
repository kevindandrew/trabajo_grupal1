import { Route, Routes } from 'react-router-dom'


export default function App() {

  return (
    <>
    <div className=' w-full flex justify-between mt-4'>
        <div className='w-2/4 bg-gray-500 flex h-9 rounded-lg border-black border-spacing-[1px] mx-auto border items-center'>
          <h2 className='w-1/6 text-white font-bold flex justify-center'>Search</h2>
          <input className='w-full bg-white border-black/30 rounded-e-lg font-bold ps-2 h-full outline-none'  type="text" placeholder='Search something interesting'/>
        </div>
        <h2 className='text-xl font-bold me-5 cursor-pointer'>My album</h2>
    </div>
    
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/todos' element={<h1>Todos</h1>} />
        <Route path='/posts' element={<h1>Posts</h1>} />
        <Route path='/albums' element={<h1>Albums</h1>} />
      </Routes>
    </>
  )
}


