import { Route, Routes } from 'react-router-dom'
import SearchBar from './coponents/SearchBar'

export default function App() {

  return (
    <>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/todos' element={<h1>Todos</h1>} />
        <Route path='/posts' element={<h1>Posts</h1>} />
        <Route path='/albums' element={<h1>Albums</h1>} />
      </Routes>
    </>
  )
}


